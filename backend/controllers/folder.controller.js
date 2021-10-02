const uuid = require('uuid').v4;
const FolderSchema = require('../models/Folder.js');
const appResponse = require('../utils/appResponse');
const DatabaseOps = require('../utils/database.helper');
const RealTime = require('../utils/realtime.helper');
const { NotFoundError, BadRequestError, InternalServerError } = require('../utils/appError');
const { getCache, setCache } = require('../utils/cache.helper');
const addActivity = require('../utils/activities');

const Files = new DatabaseOps('File');
const Folders = new DatabaseOps('Folder');

exports.folderCreate = async (req, res) => {
  const { body } = req;
  body.folderId = uuid();

  const folder = await FolderSchema.validateAsync(body);
  await Folders.create(folder);

  const createdFolder = await Folders.fetchOne({ folderId: folder.folderId });
  addActivity(req.headers.userObj, 'created', `${createdFolder.folderName}`)
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
    Folders.update(folderId, updateLastAccessed),
    RealTime.publish(`folderDetail ${data._id}`, data)
  ])

  const updatedFolderDetails = await Folders.fetchOne({ _id: folderId });

  res.status(200).send(appResponse(null, updatedFolderDetails, true));
}


exports.folderUpdate = async (req, res) => {
  const { body } = req;

  const response = await Folders.update(req.params.id, body);
  const allFolders = await Folders.fetchAll();

  const updatedFolder = allFolders.data.filter((folder) => {
    return folder._id === req.params.id;
  });
  addActivity(req.headers.userObj, 'updated', `${updatedFolder.folderName} details`)
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
  addActivity(req.headers.userObj, 'deleted', `${folder.folderName}`)
  res.status(200).send(appResponse(null, response, true));
};

exports.recentlyViewed = async(req, res) => {
  const data = await Folders.fetchAll();

  data.sort(function (a, b) {
    const dateA = new Date(a.lastAccessed), dateB = new Date(b.lastAccessed)
    return dateB - dateA
  });

  res.status(200).json(data.slice(0, 10))
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
    addActivity(req.headers.userObj, 'starred', `${data.folderName}`)
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
    addActivity(req.headers.userObj, 'unstarred', `${data.folderName}`)
    res.status(200).send(appResponse('Folder has been unstarred!', response, true));
  } else {
    throw new BadRequestError();
  }
}
