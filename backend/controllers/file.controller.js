const fs = require('fs');
const os = require('os');
const path = require('path');
const uuid = require('uuid').v4;
const Busboy = require('busboy');
const { promisify } = require('util');
const mimeTypes = require('mime-types');
const DatabaseConnection = require('../utils/database.helper');
const File = new DatabaseConnection('File');
const RealTime = require('../utils/realtime.helper');
const FileSchema = require('../models/File');
const MediaUpload = require('../utils/mediaUpload');
const { BadRequestError, InternalServerError, NotFoundError } = require('../utils/appError');
const appResponse = require('../utils/appResponse');
const md5Generator = require('../utils/md5Generator');

const getFilePath = (fileName, fileId) => path.normalize(path.join(process.cwd(), `\\uploads\\file~~${fileId}~~${fileName}`));
const getFileDetails = promisify(fs.stat);
const deleteFile = promisify(fs.unlink);

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

	busboy.on('file', (_, file, fileName, encoding, mimetype) => {
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
          MediaUpload.uploadFile(filePath)
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
        
        // Save file details to zccore & delete file from local disk
        await Promise.all([File.create(file), deleteFile(filePath)]);

        // Send (file) info to FE using Centrifugo
        return res.status(200).send(appResponse('File uploaded successfully!', file, true));
      });
		}).catch(e => {
			console.error('-- file read failed:', e);
      return res.status(400).send(appResponse(null, 'No file with provided credentials...', false, { credentials: { fileId, fileName } }));
		});
	})

exports.fileCreate = async (req, res) => {
  const { body } = req;


  res.send({ response });
};

exports.getAllFiles = async (req, res) => {
  const data = await File.fetchAll();

  let response = await RealTime.publish("all_files", data);

exports.getNonDeletedFiles = async (req, res) => {
  
  const allFiles = await File.fetchAll();

  const data = allFiles.data.filter(file => {

    return file.isDeleted === false;

  })


  res.status(200).send(appResponse(null, data, true));
}


exports.fileDetails = async (req, res) => {
  const data = await File.fetchOne({ _id: req.params.id });

  const response = await RealTime.publish("file_detail", data);

  res.send({ ...response });
};

exports.fileUpdate = async (req, res) => {
  const { body } = req;

  res.status(200).send(appResponse(null, data, true));


  const updatedFile = allFiles.data.filter((file) => {
    return file._id === req.params.id;
  });

  res.send({ message: "File details updated!", updatedFile });
};

exports.fileDelete = async (req, res) => {
  const response = await File.delete(req.params.id);

  if (!response) throw new InternalServerError()

  res.status(200).send(appResponse('File deleted successfully!', response, true));
}

exports.deleteMultipleFiles = async (req,res) => {
  const [... ids] = req.body.ids;

  const response = await File.delete(ids);

  if (!response) throw new InternalServerError()

  res.status(200).send(appResponse('Multiple Files deleted successfully!', response, true));
}

// send to trash
exports.deleteTemporarily = async (req,res) => {
  const {data} = await File.fetchOne( {_id: req.params.id });
  let toggler
  if (data.isDeleted === false) {
    toggler = true

    const response = await File.update(req.params.id, { isDeleted: toggler });

    res.status(200).send(appResponse('File sent to trash!', response, true));
  } else {
    throw new BadRequestError()
  }
}

exports.restoreFile =  async (req,res) => {
  const {data} = await File.fetchOne( {_id: req.params.id });
  let toggler
  if (data.isDeleted === true) {
    toggler = false

    const response = await File.update(req.params.id, { isDeleted: toggler });

    res.status(200).send(appResponse('File restored!', response, true));
  } else {
    throw new BadRequestError()
  }
}

exports.searchFileByIsDeleted = async (req, res) => {
  try {
    const isDeleted = true;
    let response = await File.fetchAll();

    const deletedFiles = response.data.filter((file) => {
      return file.isDeleted === isDeleted;
    });

    response = RealTime.publish("deleted_files", deletedFiles);

    res.status(200).send({ ...response });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

// handle file searching by is starred is true
exports.searchStarredFiles = async (req, res) => {
  try {
    const { data } = await File.fetchAll();

    // loop through response object and check if isStarred is true
    const starredFiles = [];
    data.map((data) => {
      return data.isStarred ? starredFiles.push(data) : null;
    });

    response = await RealTime.publish("starred_files", starredFiles);

    return res
      .status(200)
      .json({ status: 200, statusText: "success", ...response });
  } catch (error) {
    return res.send({ error });
  }
};

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
        : res.status(200).json(rd);
      console.log(rd);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Retrieves all the files that has been archived by a user
exports.getArchivedFiles = async (req, res) => {
  try {
    const allFiles = await File.fetchAll();

    //   Validate Response Status
    if (allFiles.status === 200) {
      const archives = [];
      allFiles.data.map((file) => {
        return file.isArchived ? archives.push(file) : null;
      });

      const response = await RealTime.publish("archived_files", archives);

      return res
        .status(200)
        .json({ status: 200, statusText: "success", archives });
    }
  } catch (error) {
    return res.send({ ...error });
  }
};
// get sall deleted files
exports.getAllDeletedFiles = async (req, res) => {
  try {
    const response = await File.fetchAll();
    const responseData = response.data;
    const resposneArray = [];
    for (const iterator of responseData) {
      if (!iterator.isDeleted) {
        continue;
      }
      resposneArray.push(iterator);
    }
    if (!resposneArray.length) {
      res.status(404).send("no data found");
      return;
    }
    res.send(resposneArray);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

// get non deleted files
exports.getNonDeletedFiles = async (req, res) => {
  
  const allFiles = await File.fetchAll();

  const data = allFiles.data.filter(file => {

    return file.isDeleted === false;

  })

  
  res.send({ ...data });
  
}


// check for duplicate files with md5 values
exports.isDuplicate = async (req, res) => {
  try {
    const { md5Hash } = req.body;
    const { data } = await API.fetchAll();
    let fileExists = false;
    // loop through response object and check if md5Hash value exist
    data.forEach((fileObject) => {
      if (fileObject.md5Hash === md5Hash) fileExists = true;
    });
    if (fileExists) {
      return res
        .status(200)
        .json({
          status: 200,
          message: "This is a duplicate file",
          duplicate: fileExists,
        });
    } else {
      return res
        .status(200)
        .json({
          status: 200,
          message: "This is a new file",
          duplicate: fileExists,
        });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// get all duplicate files
exports.getAllDuplicates = async (req, res) => {
  try {
    const { data } = await API.fetchAll();
    const duplicateFiles = [];
    const duplicateHash = [];
    // loop through response object and check if md5Hash value exist
    data.forEach((fileObject) => {
      if (!duplicateHash.includes(fileObject.md5Hash)) {
        duplicateHash.push(fileObject.md5Hash);
      } else {
        duplicateFiles.push(fileObject);
      }
    });
    return res.status(200).json({
      status: 200,
      message: `${duplicateHash.length} ${
        duplicateHash.length > 1 ? " Files" : " File"
      } has duplicates`,
      duplicate: deletedFiles,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// set edit permission
exports.setEditPermission = async (req, res) => {
  try {
    const files = await File.fetchAll();
    const fileData = files.data;
    const { admin } = req.params;
    if (admin == "true") {
      res.send(
        fileData.map((files) => {
          return (files.permission = "edit");
        })
      );
    } else {
      res.send(
        fileData.map((files) => {
          return (files.permission = "view");
        })
      );
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchByType = async (req, res) => {
  try {
    const { data } = await File.fetchAll();
    const { fileType } = req.query;

    if (fileType) {
      const fileSearch = data.filter((file) => {
        return file.type === fileType;
      });

      if (fileSearch.length === 0) {
        return res
          .status(404)
          .json(`Sorry, there is no file type: ${fileType}`);
      }

      return res.status(200).json(fileSearch);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.fileRename = async (req, res) => {
  const { body } = req;
  //Get single file
  const data = await File.fetchAll();
  var fileDetails = {};

  //gets file details
  files = await data.data;
  files.forEach(function (file) {
    if (file._id == req.params.id) {
      fileDetails = file;
    }
  });
  fileDetails.name = body.name;
  //updates file name
  const response = await File.update(req.params.id, fileDetails);
  res.send({ response });
};

// Search Files By Size
exports.searchBySize = async (req, res) => {
  try {
    const { data } = await File.fetchAll();
    let { size } = req.params;
    let sizeRangePlus = Number(size) + 500;
    let sizeRangeMinus = Number(size) - 500;
    const files = [];
    for (i = 0; i < data.length; i++) {
      if (data[i].size) {
        if (data[i].size >= sizeRangeMinus && data[i].size <= size) {
          files.push(data[i]);
        } else if (data[i].size <= sizeRangePlus && data[i].size >= size) {
          files.push(data[i]);
        }
      }
    }
    files.length > 0
      ? res.status(200).json(files)
      : res.status(404).json("No matches");
  } catch (err) {
    res.status(500).json(err);
  }
}
}
}

