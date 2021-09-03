const File = require("../models/File")

const ApiConnection = require('./helpers/api.helper');
const API = new ApiConnection("File");

exports.fileCreate = async (req, res) => {
  const response = await API.create(req.body);
  res.send({ response })
}

exports.getAllFiles = async (req, res) => {
  const response = await API.fetchAll();
  res.send({ response })
}

exports.fileDetails = async (req, res) => {
  const response = await API.fetchOne(req.params.id);
  res.send({ response })
}

exports.fileUpdate = async (req, res) => { };

exports.fileDelete = async (req, res) => { };

// handle file searching by is starred is true
exports.fileSearchByIsStarred = async (req, res) => {
  const { data } = await API.fetchAll();
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
      message: "success",
      data: starredFiles,
    }
  });
}

exports.fileSearchByDate = async (req, res) => {
  let { startDate, endDate } = req.query;

  try {
    if (startDate === "") {
      return res.status(400).json("pick a date");
    }

    //use this to search for files from your input date till present

    if (startDate && endDate) {
      const file = await File.find({
        createdAt: {
          $gte: new Date(new Date(startDate).setHours(00, 00, 00)),
          $lt: new Date(new Date(endDate).setHours(23, 59, 59)),
        },
      }).sort({ createdAt: "asc" });

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
      }).sort({ createdAt: "asc" });

      file.length === 0
        ? res.status(404).json(`No files found from ${startDate} till date`)
        : res.status(200).json(file);
    }

    //to get files for the only one day end and start date should be the same
  } catch (error) {
    res.status(500).json(error);
  }
};
