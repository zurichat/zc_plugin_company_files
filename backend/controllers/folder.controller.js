const Folder = require('../models/Folder.js') 

exports.folderCreate = async (req, res) => {
  try{
    folder = new Folder(req.body);
    validateError = folder.joiValidate(req.body);
    // console.log(folder)
    savedFolder = await folder.save((err, doc) => {
      if (err) {
        return console.error(err);
        console.log('Document insert unsuccesssful!');
      } else{
        res.json(doc)
      }
    })
  } catch (e) {
    console.log(e)
  }
    
  
}

exports.folderDetails = async (req, res) => {
    
}

exports.folderUpdate = async (req, res) => {

}

exports.folderDelete = async (req, res) => {
  
}