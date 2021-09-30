const uuid = require('uuid').v4;
const FolderSchema = require('../models/Folder.js');
const appResponse = require('../utils/appResponse');
const DatabaseConnection = require('../utils/database.helper');
const RealTime = require('../utils/realtime.helper');
const { NotFoundError, BadRequestError, InternalServerError } = require('../utils/appError');

const Folders = new DatabaseConnection('Folder');

exports.folderCreate = async (req, res) => {
  const { body } = req;
  body.folderId = uuid();
  // body.parentId = uuid();

  const folder = await FolderSchema.validateAsync(body);
  const createdFolder = await Folders.create(folder);
  const data = createdFolder;
  const createdFolderObject = await Folders.fetchOne({ _id: data?.object_id });


  res.status(201).json(createdFolderObject);
};

exports.getAllFolders = async (req, res) => {
  const  data  = await Folders.fetchAll();
  const response = await RealTime.publish('allFolders', data);
 
  res.status(200).send(appResponse(null, data, true, {
      ...response,
      count: data.length,
    }));
};

exports.folderDetails = async (req, res) => {
  const { id } = req.params;

    //this line of code updates the folder last accessed time to the current date and time 
    const updateLastAccessed = { lastAccessed: new Date().toISOString() }; 
     await Folders.update(id, updateLastAccessed);
     const data = await Folders.fetchOne({ _id: id });
     const response = await RealTime.publish('folder_detail', data);
    res.status(200).send(appResponse(null, data, true, {
        ...response,
        count: data.length,
      }));

};

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
