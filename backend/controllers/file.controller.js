const uuid = require('uuid');
const FileSchema = require('../models/File');
const appResponse = require('../utils/appResponse');
const DatabaseConnection = require('../utils/database.helper');
const Files = new DatabaseConnection('File');

exports.fileCreate = async (req, res) => {
  const { body } = req;
  body.id = uuid.v4();

  const file = await FileSchema.validateAsync(body);
  const response = await Files.create(file);

  res.status(200).send(appResponse(null, response, true));
}


exports.getAllFiles = async (req, res) => {
  const response = await Files.fetchAll();

  res.status(200).send(appResponse(null, response, true, { count: response.length }));
}


exports.fileDetails = async (req, res) => {
  const response = await Files.fetchOne(req.params.id);

  res.status(200).send(appResponse(null, response, true));
}

exports.fileUpdate = async (req, res) => {

}

exports.fileDelete = async (req, res) => {

}

// handle file searching by is starred is true
exports.searchStarredFiles = async (req, res) => {
  try {
    const { data } = await Files.fetchAll();
    // loop through response object and check if isStarred is true
    const starredFiles = [];
    data.map(({ isStarred, file_type, name, _id, isArchived }) => {
      if (isStarred) {
        starredFiles.push({ _id, isStarred, file_type, name, isArchived });
      }
    })
    return res.status(200).json({
      response: {
        status: 200,
        message: 'success',
        data: starredFiles,
      }
    });
  } catch (err) {
    return res.status(500).json(err);
  }
}

exports.fileSearchByDate = async (req, res) => {
  let { startDate, endDate } = req.query;

  try {
    if (startDate === '') {
      return res.status(400).json('pick a date');
    }

    //use this to search for files from your input date till present

    if (startDate && endDate) {
      const file = await File.find({
        createdAt: {
          $gte: new Date(new Date(startDate).setHours(00, 00, 00)),
          $lt: new Date(new Date(endDate).setHours(23, 59, 59)),
        },
      }).sort({ createdAt: 'asc' });

      file.length === 0
        ? res
          .status(404)
          .json(`No files found between ${startDate} and ${endDate}`)
        : res.status(200).json(file);
    }

    //use this to search for files from your input date till present

    if (startDate && !endDate) {
      const file = await File.find({
        createdAt: {
          $gte: new Date(new Date(startDate).setHours(00, 00, 00)),
        },
      }).sort({ createdAt: 'asc' });

      file.length === 0
        ? res.status(404).json(`No files found from ${startDate} till date`)
        : res.status(200).json(file);
    }

    //to get files for the only one day end and start date should be the same
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieves all the files that has been archived by a user
exports.getArchivedFiles = async (req, res) => {
  try {
    const allFiles = await Files.fetchAll();

    //   Validate Response Status
    if (allFiles.status === 200) {
      const archives = [];
      allFiles.data.map((file) => {
        file.isArchived ? archives.push(file) : null;
      });
      return res
        .status(200)
        .json({ status: 200, message: 'success', archives: archives });
    }
  } catch (error) {
    return error.response.data;
  }
};
