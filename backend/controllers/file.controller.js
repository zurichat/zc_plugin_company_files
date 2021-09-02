const File = require("../models/File");

const ApiConnection = require("./helpers/api.helper");
const API = new ApiConnection("File");

exports.fileCreate = async (req, res) => {
  const response = await API.create(req.body);
  res.send({ response });
};

exports.getAllFiles = async (req, res) => {
  const response = await API.fetchAll();
  res.send({ response });
};

exports.fileDetails = async (req, res) => {
  const response = await API.fetchOne(req.params.id);
  res.send({ response });
};

exports.fileUpdate = async (req, res) => {};

exports.fileDelete = async (req, res) => {};

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

// Retrieves all the files that has been archived by a user
exports.getArchivedFiles = async (req, res) => {
  try {
    const allFiles = await API.fetchAll();

    //   Validate response status
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
    return error.response.data;
  }
};
