const ApiConnection = require('./helpers/api.helper');
const API = new ApiConnection("Folder");

exports.folderCreate = async (req, res) => {
    const response = await API.create( req.body );
    res.send({ response })
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