const uuid = require('uuid');
const FolderSchema = require('../models/Folder.js');
const appResponse = require('../utils/appResponse');
const DatabaseConnection = require('../utils/database.helper');
const Folders = new DatabaseConnection('Folder');

exports.folderCreate = async (req, res) => {
  const { body } = req;

  const folder = await FolderSchema.validateAsync(body);
  const response = await Folders.create(folder);

  res.status(200).send(appResponse(null, response, true));
}

exports.getAllFolders = async (req, res) => {
  const response = await Folders.fetchAll();

  res.status(200).send(appResponse(null, response, true, { count: response.length }));
}

exports.folderDetails = async (req, res) => {
  const response = await Folders.fetchOne( req.params.id );
  
  res.status(200).send(appResponse(null, response, true));
}

exports.folderUpdate = async (req, res) => {
  const { body } = req;

  const response = await Folders.update(req.params.id, body);
  const allFolders = await Folders.fetchAll();

  const updatedFolder = allFolders.data.filter(folder => {

    return folder._id === req.params.id;

  })

  res.status(200).send(appResponse(null, updatedFolder, true));

}

exports.folderDelete = async (req, res) => {
  const {id} = req.params;
 
  const folders = await Folders.fetchAll();
  
  const folder = folders.data.filter(item => item._id == id);

  if(!folder.length) {
    return res.status(404).json({error: 'folder with the given ID not found!'})
  }

  const response = await Folders.delete(id);

   res.status(200).send(appResponse(null, response, true));
 }
