const uuid = require('uuid').v4;
const FolderSchema = require('../models/Folder.js');
const appResponse = require('../utils/appResponse');
const DatabaseOps = require('../utils/database.helper');
const RealTime = require('../utils/realtime.helper');
const { NotFoundError, BadRequestError, InternalServerError } = require('../utils/appError');
const { getCache, setCache } = require('../utils/cache.helper');

const Files = new DatabaseOps('File');
const Folders = new DatabaseOps('Folder');

exports.folderCreate = async (req, res) => {
  const { body } = req;
  body.folderId = uuid();

  const folder = await FolderSchema.validateAsync(body);
  await Folders.create(folder);

  const createdFolder = await Folders.fetchOne({ folderId: folder.folderId });

  res.status(201).send(appResponse(null, createdFolder, true));
}


exports.getAllFolders = async (req, res) => {
  const cache = await getCache(req, { key: 'allFolders' });

  if (cache) {
    res.status(200).send(appResponse(null, JSON.parse([cache]), true));
  } else {
    const allFiles = await Files.fetchAll();
    const allFolders = await Folders.fetchAll();

    allFolders.forEach(folder => folder.noOfFiles = allFiles.filter(({ folderId }) =>  folderId === folder._id).length);
    await RealTime.publish('allFolders', allFolders);

    // Cache data in memory
    // setCache(req, { key: 'allFolders', duration: 3600, data: JSON.stringify(allFolders) });

    res.status(200).send(appResponse(null, allFolders, true));
  }
}


// find files in a folder
exports.getFilesInFolder = async (req, res) => {
  const { folderId } = req.params;
  if (!folderId) throw new BadRequestError('Missing "folderId" parameter');

  const [folder, allFiles] = await Promise.all([
    Folders.fetchOne({ _id: folderId }),
    Files.fetchAll()
  ]);

  if (!folder) throw new NotFoundError('Folder not found!');
  if (!allFiles) throw new NotFoundError();

  const matchingFiles = allFiles.filter(file => file.folderId === folderId);

  res.status(200).send(appResponse(null, matchingFiles, true));
}


exports.folderDetails = async (req, res) => {
  const { folderId } = req.params;
  if (!folderId) throw new BadRequestError('Missing "folderId" parameter');

  const data = await Folders.fetchOne({ _id: folderId });
  if (!data) throw new NotFoundError();

  // this line of code updates the folder last accessed time to the current date and time
  const updateLastAccessed = { lastAccessed: new Date().toISOString() };

  await Promise.all([
    Folders.update(id, updateLastAccessed),
    RealTime.publish(`folderDetail${data._id}`, data)
  ])

  res.status(200).send(appResponse(null, folderDetail, true));
}


exports.folderUpdate = async (req, res) => {
  const { body } = req;

  const response = await Folders.update(req.params.id, body);
  const allFolders = await Folders.fetchAll();

  const updatedFolder = allFolders.data.filter((folder) => {
    return folder._id === req.params.id;
  });

  res.status(200).send(appResponse(null, updatedFolder, true));
};

exports.folderDelete = async (req, res) => {
  const { id } = req.params;

  // fetch all folders
  const folders = await Folders.fetchAll();

  // fetch a folder
  const folder = folders.data.filter((item) => item._id == id);

  // check to see if folder exists
  if (!folder.length) {
    return res
      .status(404)
      .json({ error: 'folder with the given ID not found!' });
  }

  const response = await Folders.delete(id);

  res.status(200).send(appResponse(null, response, true));
};

exports.recentlyViewed = async(req, res) => {
  const data = await Folders.fetchAll();

  data.sort(function (a, b) {
    const dateA = new Date(a.lastAccessed), dateB = new Date(b.lastAccessed)
    return dateB - dateA
  });

  res.status(200).json(data.slice(0, 5))
} 

// search starred folder
exports.searchStarredFolders = async (req, res) => {

  const allFolders = await Folders.fetchAll();
  if (!allFolders) throw new InternalServerError()

  const data = allFolders.filter(folder => folder.isStarred);
  
  await RealTime.publish('starredFolders', data);

  return (data.length < 1)
    ? res.status(200).send(appResponse('No starred folder!', [], true))
    : res.status(200).send(appResponse('Starred folders', data, true));
}

// Star a folder
exports.starFolder = async (req, res) => {
  const data = await Folders.fetchOne({ _id: req.params.id });
  
  if (data.isStarred === false ) {
    const response = await Folders.update(req.params.id, { isStarred: true });

    res.status(200).send(appResponse('Folder has been starred!', response, true));
  } else {
    throw new BadRequestError();
  }
}


// unStar a folder
exports.unStarFolder = async (req, res) => {
  const data = await Folders.fetchOne({ _id: req.params.id });
  
  if (data.isStarred === true) {
    const response = await Folders.update(req.params.id, { isStarred: false });

    res.status(200).send(appResponse('Folder has been unstarred!', response, true));
  } else {
    throw new BadRequestError();
  }
}


/**
 * EXTRA ADDITIONS FOR CONTEXT MENU
 */


// RENAME FOLDER
exports.folderRename = async (req, res) => {
  const { folderId } = req.params;
  let { oldFolderName, newFolderName } = req.body;

  if (!folderId || !oldFolderName || !newFolderName) throw new BadRequestError('Please provide the "folderId", "oldFolderName" & "newFolderName"');

  // Get single folder
  const folder = await Folders.fetchOne({ _id: folderId });
  if (!folder) throw new NotFoundError();
  
  if (
    oldFolderName === folder.folderName &&
    newFolderName !== folder.folderName
  ) {

    await Folders.update(folderId, { folderName: newFolderName });

    res.status(200).send(appResponse('Folder renamed successfully!', { ...folder, folderName: newFolderName }, true));
  } else {
    throw new BadRequestError('"oldFolderName" cannot be equal to the "newFolderName"!');
  }
}


// DELETE FOLDER AND FILES IN IT
exports.folderDeleteWithFiles = async (req, res) => {
  const { folderId } = req.params;
  if (!folderId) throw new BadRequestError('Please provide the "folderId" of folder to delete');

  // fetch the folder
  const folder = await Folders.fetchOne({ _id: folderId });
  if (!folder) throw new NotFoundError();

  // Fetch all files Contained in the Folder
  let allFiles = await Files.fetchAll();
  let filesInFolder = allFiles.filter(file => {
    return file.folderId === folderId
  })

  // Delete all files contained in the folder by Id
  filesInFolder.forEach(async (file) => {
    if (file.isDeleted === false) {
      const response = await Files.update(file.fileId, { isDeleted: true });
  
      // Save to list of activities
      //await addActivity('deleted', `${data.fileName}`);
    } else {
      throw new BadRequestError();
    }
  })
  // Now delete the folder by Id
  const response = await Folders.delete(folderId);

  res.status(200).send(appResponse(null, response, true));
};

// COPY FOLDER ::: CREATING A COPY OF A FOLDER
exports.copyFolder = async (req, res) => {

  const data = await Folders.fetchOne({ _id: req.params.folderId });
  data.folderName = `${data.folderName}(1)`;
  delete data._id, delete data.dateAdded;

  const response = await Folders.create(data.data);
  res.send({ response })

}