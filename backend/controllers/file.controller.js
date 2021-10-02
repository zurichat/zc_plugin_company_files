const { unlink: deleteFile, stat: getFileDetails } = require('fs/promises');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid').v4;
const Busboy = require('busboy');
const mimeTypes = require('mime-types');
const DatabaseOps = require('../utils/database.helper');
const File = new DatabaseOps('File');
const Folder = new DatabaseOps('Folder');
const RealTime = require('../utils/realtime.helper');
const FileSchema = require('../models/File');
const MediaUpload = require('../utils/mediaUpload');
const { BadRequestError, InternalServerError, NotFoundError } = require('../utils/appError');
const appResponse = require('../utils/appResponse');
const md5Generator = require('../utils/md5Generator');
const addActivity = require('./../utils/activities');
const { getCache, setCache } = require('../utils/cache.helper');

const getFilePath = (fileName, fileId) => path.normalize(path.join(process.cwd(), 'uploads', `file~${fileId}~${fileName}`));


exports.fileUploadRequest = (req, res) => {
  const { fileName } = req.body;
  if (!fileName) {
    throw new BadRequestError('Missing file name!');
  } else {
    const fileId = uuid();
    fs.createWriteStream(getFilePath(fileName, fileId), { flags: 'w' });

    res.status(200).send(appResponse(null, { fileId, fileName }, true));
  }
}


exports.fileUploadStatus = (req, res) => {
  if (req.query && req.query.fileName && req.query.fileId) {
    getFileDetails(getFilePath(req.query.fileName, req.query.fileId))
      .then(stats => {
        res.status(200).json({ status: 'success', totalChunkUploaded: stats.size });
      }).catch(e => {
        console.error('-- file read failed:', e);
        res.status(400).json({ status: 'failure', message: 'No file with provided credentials...', credentials: { ...req.query } });
      })
  } else {
    return res.status(400).json({ status: 'failure', message: 'Invalid "Content-Range" format', credentials: { ...req.query } });
  }
}


exports.fileUpload = async (req, res) => {
  const contentRange = req.headers['content-range'];
  const fileId = req.headers['x-file-id'];
  const folderId = req.headers['x-folder-id'] || null;

  if (!contentRange) throw new BadRequestError('Missing "Content-Range" header');
  if (!fileId) throw new BadRequestError('Missing "X-File-Id" header');

  const match = contentRange.match(/bytes=(\d+)-(\d+)\/(\d+)/);

  if (!match) throw new BadRequestError('Invalid "Content-Range" format');

  const rangeStart = Number(match[1]);
  const rangeEnd = Number(match[2]);
  const fileSize = Number(match[3]);

  if (rangeStart >= fileSize || rangeStart >= rangeEnd || rangeStart >= rangeEnd) {
    throw new BadRequestError('Invalid "Content-Range" provided');
  }

  const busboy = new Busboy({ headers: req.headers });

  busboy.on('file', (_, file, fileName) => {
    const filePath = getFilePath(fileName, fileId);

    if (!fileId) req.pause();

    getFileDetails(filePath).then(stats => {
      if (stats.size !== rangeStart) throw new BadRequestError('Bad chunk range start');

      const fileStream = file.pipe(fs.createWriteStream(filePath, { flags: 'a' }));

      fileStream.on('error', () => {
        throw new InternalServerError('File upload failed!');
      })

      fileStream.on('finish', async () => {
        // Generate file's md5Hash & upload to Cloudinary
        const [md5Hash, { url, size, cloudinaryId }] = await Promise.all([
          md5Generator(filePath),
          MediaUpload.uploadFile(filePath),
        ]);

        const fileData = {
          fileId,
          folderId,
          fileName,
          url,
          type: mimeTypes.lookup(fileName),
          size,
          cloudinaryId,
          md5Hash
        }

        const file = await FileSchema.validateAsync(fileData);

        // Save file details to zccore, delete file from local disk,
        // save to list of activities & send (file) info to FE using Centrifugo
        await Promise.all([
          File.create(file),
          deleteFile(filePath),
          addActivity('added', `${fileData.fileName}`),
          RealTime.publish('newFile', file)
        ]);

        // normal response without data.
        return res.status(200).send(appResponse('File uploaded successfully!', file, true));
      });
    }).catch(e => {
      // console.error('-- file read failed:', e);
      return res.status(400).send(appResponse(null, 'No file with provided credentials...', false, { credentials: { fileId, fileName } }));
    });
  })

  busboy.on('error', e => {
    // console.error('-- file read failed:', e);
    throw new InternalServerError('File read failed!');
  })

  req.pipe(busboy);
}


exports.cropImage = async (req, res) => {
  // Upload cropped file to cloudinary
  const cropImage = req.files.image;
  const id = req.body.id;

  // Check if file is image
  const check = /image/.test(cropImage.mimetype);

  if (check) {
    const newImage = await MediaUpload.uploadFile(cropImage.tempFilePath);
    // Get previous image details
    const previousImage = await File.fetchOne({ _id: id });

    if (newImage.size !== previousImage.size) { // Image crop occured
      const updateParams = { url: newImage.url, cloudinaryId: newImage.cloudinaryId, size: newImage.size }
      await Promise.all([
        await MediaUpload.deleteFromCloudinary(previousImage.cloudinaryId),
        File.update(id, updateParams),
        deleteFile(cropImage.tempFilePath)
      ])

      const updatedCroppedImage = await File.fetchOne({ _id: id });
    
      res.status(200).send(appResponse('Image cropped successfully!', updatedCroppedImage, true));
    } else { // Image crop did not occur
      await Promise.all([
        MediaUpload.deleteFromCloudinary(newImage.cloudinaryId),
        deleteFile(cropImage.tempFilePath)
      ]);
      throw new BadRequestError(`Image crop didn't occur!`);
    }
  } else {
    await deleteFile(cropImage.tempFilePath);
    throw new BadRequestError('Only images are allowed!');  
  }
}


// Get all non-deleted files
exports.getAllFiles = async (req, res) => {
  const cache = await getCache(req, { key: 'allFiles' });

  if (cache) {
    res.status(200).send(appResponse(null, JSON.parse([cache]), true));
  } else {
    let data = await File.fetchAll();

    data = data.sort((a, b) => {
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    });

    const nonDeletedFiles = data.filter(file => !file.isDeleted);
    await RealTime.publish('allFiles', nonDeletedFiles);

    // Cache data in memory
    setCache(req, { key: 'allFiles', duration: 3600, data: JSON.stringify(nonDeletedFiles) });

    res.status(200).send(appResponse(null, nonDeletedFiles, true));
  }
}


// Get all files by type
exports.getFileByType = async (req, res) => {
  // Type from params
  const { type } = req.params;
  const data = await File.fetchAll();

  const matchedFiles = data.filter(file => new RegExp(`\\b${type}\\b`).test(file.type));

  await RealTime.publish(`${type}Files`, data); 
  res.status(200).send(appResponse(null, matchedFiles, true));
}


exports.fileDetails = async (req, res) => {
  const { fileId } = req.params;
  
  let data = await File.fetchOne({ _id: fileId });
  if (!data) throw new NotFoundError();

  const updatedLastAccessed = { lastAccessed: new Date().toISOString() };
  data = { ...data, ...updatedLastAccessed };

  await Promise.all([
    File.update(fileId, updatedLastAccessed),
    RealTime.publish('fileDetail', data)
  ])

  res.status(200).send(appResponse(null, data, true));
}


exports.fileRename = async (req, res) => {
  const { fileId } = req.params;
  let { oldFileName, newFileName } = req.body;

  if (!fileId || !oldFileName || !newFileName) throw new BadRequestError('Please provide the "fileId", "oldFileName" & "newFileName"');

  // Get single file
  const file = await File.fetchOne({ _id: fileId });
  if (!file) throw new BadRequestError('Invalid "fileId" provided!');

  if (
    oldFileName === file.fileName &&
    newFileName !== file.fileName.substring(0, file.fileName.lastIndexOf('.'))
  ) {
    newFileName = newFileName + file.fileName.substr(file.fileName.lastIndexOf('.'));
    await File.update(fileId, { fileName: newFileName });

    res.status(200).send(appResponse('File renamed successfully!', { ...file, fileName: newFileName }, true));
  } else {
    throw new BadRequestError('"oldFileName" cannot be equal to the "newFileName"!');
  }
}


// Delete permanently
exports.fileDelete = async (req, res) => {
  const data = await File.fetchOne({ '_id': req.params.id });
  if (!data) throw new NotFoundError();

  const [response] = await Promise.all([
    File.delete(req.params.id),
    MediaUpload.deleteFromCloudinary(data.cloudinaryId)
  ]);
  
  if (!response) throw new InternalServerError();

  // Save to list of activities
  await addActivity('permanently deleted', `${data.fileName}`);

  res.status(200).send(appResponse('File deleted successfully!', response, true));
}


// Delete multiple files 
exports.deleteMultipleFiles = async (req, res) => {
  const { ids } = req.body;

  const [response] = await Promise.all([
    await File.delete(ids),
    ...ids.map(async id => {
      const data = await File.fetchOne({ _id: id });
      // Save to list of activities
      if (data) await addActivity('deleted', `${data.fileName}`);
      return MediaUpload.deleteFromCloudinary(data.cloudinaryId);
    })
  ]);

  if (!response) throw new InternalServerError();

  res.status(200).send(appResponse('Multiple files deleted successfully!', response, true));
}


// Send to trash
exports.deleteTemporarily = async (req, res) => {
  const data = await File.fetchOne({ _id: req.params.id });
  
  if (data.isDeleted === false) {
    const response = await File.update(req.params.id, { isDeleted: true });

    // Save to list of activities
    await addActivity('deleted', `${data.fileName}`);

    res.status(200).send(appResponse('File sent to trash!', response, true));
  } else {
    throw new BadRequestError();
  }
}


// Restore file
exports.restoreFile = async (req, res) => {
  const data = await File.fetchOne({ _id: req.params.id });
  
  if (data.isDeleted === true) {
    const response = await File.update(req.params.id, { isDeleted: false });

    // Save to list of activities
    await addActivity('restored', `${data.fileName}`);

    res.status(200).send(appResponse('File restored!', response, true));
  } else {
    throw new BadRequestError();
  }
}


// Cut or move file
exports.cutOrMoveFile = async (req, res) => {
  let { fileId, folderId } = req.params;
  if (!fileId || !folderId) throw new BadRequestError('"fileId" & "folderId" are required!');
  if (folderId === 'null') folderId = null;

  const [file, folder] = await Promise.all([
    File.fetchOne({ _id: fileId }),
    Folder.fetchOne({ _id: folderId })
  ])

  if (!file) throw new NotFoundError('File not found!');
  if (!folder && folderId !== null) throw new NotFoundError('Folder not found!');

  if (file.folderId === folderId) throw new BadRequestError(`You can't cut or move a file to the same folder!`);

  await File.update(fileId, { folderId });

  res.status(200).send(appResponse('File cut or moved successfully!', { ...file, folderId }, true));
}


// handle file searching by is starred is true
exports.searchStarredFiles = async (req, res) => {

  const allFiles = await File.fetchAll();
  if (!allFiles) throw new InternalServerError()

  const data = allFiles.filter(file => file.isStarred);
  
  await RealTime.publish('starredFiles', data);

  return (data.length < 1)
    ? res.status(200).send(appResponse('No starred file!', [], true))
    : res.status(200).send(appResponse('Starred files', data, true));
}

exports.searchByDate = async (req, res) => {
  try {
    const { data } = await File.fetchAll();
    const { pickDate } = req.query;

    // date format yyyy-m-d
    if (pickDate) {
      const rd = data.filter((d) => {
        if (d.createdAt === pickDate) {
          return true;
        } else return false;
      });
      rd.length === 0
        ? res.status(404).json(`no files found on ${pickDate}`)
        : ( res.status(200).json(rd) && await RealTime.publish('fileDateSearch', rd) );
      console.log(rd);
    }

  } catch (error) {
    return res.status(500).json(error);
  }
};

// Retrieves all the files that has been archived by a user
exports.getArchivedFiles = async (req, res) => {

  const allFiles = await File.fetchAll();
  if (!allFiles) throw new InternalServerError();

  const data = allFiles.filter(file => file.isArchived);
  
  await RealTime.publish('archivedFiles', data);

  return data.length < 1
    ? res.status(200).send(appResponse('No archived file!', [], true))
    : res.status(200).send(appResponse('Archived files', data, true));
}


// Get all deleted files
exports.getAllDeletedFiles = async (req, res) => {
  const allFiles = await File.fetchAll();
  if (!allFiles) throw new InternalServerError();

  const deletedFiles = allFiles.filter(file => file.isDeleted);

  await RealTime.publish('deletedFiles', deletedFiles);

  return (deletedFiles.length < 1)
    ? res.status(200).send(appResponse('No file deleted yet!', [], true))
    : res.status(200).send(appResponse('Deleted files', deletedFiles, true));
}


// check for duplicate files with md5 values
exports.isDuplicate = async (req, res) => {
  const { md5Hash } = req.body;
  const allFiles = await File.fetchAll();
  if (!allFiles) throw new InternalServerError();

  const [fileExists] = allFiles.filter(file => file.md5Hash === md5Hash);

  if (fileExists) {
    res.status(400).send(appResponse('File exists'));
  } else {
    res.status(200).send(appResponse('File does not exist', null, true));
  }
}

// Star a file
exports.starFile = async (req, res) => {
  const data = await File.fetchOne({ _id: req.params.id });
  
  if (data.isStarred === false) {
    const response = await File.update(req.params.id, { isStarred: true });

    res.status(200).send(appResponse('File has been starred!', response, true));
  } else {
    throw new BadRequestError();
  }
}


// Unstar a file
exports.unStarFile = async (req, res) => {
  const data = await File.fetchOne({ _id: req.params.id });
  
  if (data.isStarred === true) {
    const response = await File.update(req.params.id, { isStarred: false });

    res.status(200).send(appResponse('File has been starred!', response, true));
  } else {
    throw new BadRequestError();
  }
}


exports.recentlyViewed = async (req, res) => {
  const data = await File.fetchAll();  
  data.sort((a, b) => {
    const dateA = new Date(a.lastAccessed), dateB = new Date(b.lastAccessed)
    return dateB - dateA
  });

  res.status(200).send(appResponse('Recently viewed files', data.slice(0, 5), true));
}

exports.detectPreview = async (req, res) => {
  const { id } = req.params;
  const updatedLastAccessed = { lastAccessed: new Date().toISOString() }; 
  await File.update(id, updatedLastAccessed);
  res.status(200).json(`lastAccessed date updated`);
}


/*******************************
 * =============================
 * 
 * UNCHECKED!
 * 
 * =============================
 *******************************/

// set edit permission
exports.setEditPermission = async (req, res) => {
  try {
    const files = await File.fetchAll()
    const fileData = files.data
    const { admin } = req.params;
    if (admin == 'true') {
      res.send(fileData.map((files) => {
        return files.permission = 'edit'
      }))
      
    } else {
      res.send(fileData.map((files) => {
        return files.permission = 'view'
      }))
    }
  } catch (error) {
    res.status(500).send(error)
  }
}