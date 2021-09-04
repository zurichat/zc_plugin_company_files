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
  try {
    const {id} = req.params;
    const folder = await Folders.fetchOne(id);

    if(!folder) {
      return res.status(404).json({error: 'folder with the given ID not found!'})
    }

    const {folderName} = req.body;
    const response = await Folders.update(id, {
      $set:{
        folderName,
      },
    });

    res.status(200).json({response});
  } catch (err) {
    res.status(400).json({error: err.message});
  }
};

exports.folderDelete = async (req, res) => {
  
}