const ApiConnection = require('./helpers/api.helper');
const API = new ApiConnection('Folder');
const Folder = require('../models/Folder.js') 

exports.folderCreate = async (req, res) => {
  try{
    folder = new Folder(req.body);
    validateError = folder.joiValidate(req.body);
    const response = await API.create( folder );
    res.send({ response })
  } catch (error) {
    return error.response.data;
  }
}

exports.getAllFolders = async (req, res) => {
    const response = await API.fetchAll();
    res.send({ response })
};

exports.folderDetails = async (req, res) => {
    const response = await API.fetchOne( req.params.id );
    res.send({ response })
}

exports.folderUpdate = async (req, res) => {

}

exports.folderDelete = async (req, res) => {
  
}