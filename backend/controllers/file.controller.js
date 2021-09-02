const File = require("../models/File");
const axios = require("axios");

const readApi = "https://zccore.herokuapp.com/data/read";

exports.fileCreate = async (req, res) => {
  //used this for testing
  const { fileName } = req.body;

  //   try {
  //     const exists = await File.findOne({ fileName: fileName });
  //     if (!exists) {
  //       const file = await File.create({
  //         fileName,
  //       });
  //       res.status(200).json(file);
  //     } else {
  //       res.status(403).json("already exists");
  //     }
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
};

exports.fileDetails = async (req, res) => {};

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
    const allFiles = await axios.get(
      `${readApi}/613125166e7d00b82b78b815/File/612a3a914acf115e685df8e3`
    );

    if (allFiles.data.status === 200) {
      const archives = [];
      allFiles.data.data.map((file) => {
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
