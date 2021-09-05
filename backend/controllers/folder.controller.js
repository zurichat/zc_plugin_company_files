const uuid = require('uuid');
const FolderSchema = require('../models/Folder.js');
const appResponse = require('../utils/appResponse');
const DatabaseConnection = require('../utils/database.helper');
const Folders = new DatabaseConnection('Folder');

exports.folderCreate = async (req, res) => {
  const { body } = req;
  body.id = uuid.v4();

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

}

exports.folderDelete = async (req, res) => {
  
}