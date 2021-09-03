const ApiConnection = require("../utils/database.helper");
const File = new ApiConnection("File");
// const FileSchema = require('../models/File');

exports.fileCreate = async (req, res) => {
  const { body } = req;

  // const file = await FileSchema.validateAsync(body);
  const response = await File.create(body);

  res.send({ response });
}


exports.getAllFiles = async (req, res) => {
  
  const response = await File.fetchAll();

  res.send({ response });
  
}


exports.fileDetails = async (req, res) => {
  const response = await File.fetchOne(req.params.id);

  res.send({ response });
}

exports.fileUpdate = async (req, res) => {

}

exports.fileDelete = async (req, res) => {

}

exports.searchFileByIsDeleted = async (req, res) => {
  
  try {

    const is_deleted = true;
    const response = await File.fetchAll();

    const deletedFiles = response.data.filter ( (file) => {
      return file.isDeleted === is_deleted;
    })

    console.log(deletedFiles)
    res.status(200).send({ deletedFiles })

  } catch (error) {

    console.log(error)
    res.send({ error })
    
  }

}

// handle file searching by is starred is true
exports.searchStarredFiles = async (req, res) => {
  try {
    const { data } = await File.fetchAll();
    // loop through response object and check if isStarred is true
    const starredFiles = [];
    data.map(({ isStarred, file_type, name, _id, isArchived }) => {
      if (isStarred) {
        starredFiles.push({ _id, isStarred, file_type, name, isArchived });
      }
    });
    return res.status(200).json({
      response: { status: 200, message: "success", data: starredFiles }
    });
  } catch (err) {
    return res.status(500).json(err);
  }
}

exports.fileSearchByDate = async (req, res) => {
  try {
    const { data } = await File.fetchAll();
    let { pickDate } = req.query;

    //date format yyyy-m-d
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
    res.status(500).json(error);
  }
}

// Retrieves all the files that has been archived by a user
exports.getArchivedFiles = async (req, res) => {
  try {
    const allFiles = await File.fetchAll();

    //   Validate Response Status
    if (allFiles.status === 200) {
      const archives = [];
      allFiles.data.map((file) => {
        file.isArchived ? archives.push(file) : null;
      });
      return res
        .status(200)
        .json({ status: 200, message: "success", archives: archives });
    }
  } catch (error) {
    return error;
  }
}
