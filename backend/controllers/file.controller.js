const ApiConnection = require("./helpers/api.helper");
const API = new ApiConnection("File");

exports.fileCreate = async (req, res) => {
  //   const { name, isArchived, isStarred } = req.body;
  //   const today = new Date();
  //   const date =
  //     today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  //   try {
  //     const file = API.create({ name, isArchived, isStarred, createdAt: date });
  //     res.status(200).json(file);
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
};

exports.fileDetails = async (req, res) => {
  const response = await API.fetchOne(req.params.id);
  res.send({ response });
};

exports.getAllFiles = async (req, res) => {};

exports.fileUpdate = async (req, res) => {};

exports.fileDelete = async (req, res) => {};

// handle file searching by is starred is true
exports.fileSearchByIsStarred = async (req, res) => {
  try {
    const { data } = await API.fetchAll();
    // loop through response object and check if isStarred is true
    const starredFiles = [];
    data.map(({ isStarred, file_type, name, _id, isArchived }) => {
      if (isStarred) {
        starredFiles.push({ _id, isStarred, file_type, name, isArchived });
      }
    });
    return res.status(200).json({
      response: {
        status: 200,
        message: "success",
        data: starredFiles,
      },
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.fileSearchByDate = async (req, res) => {
  try {
    const { data } = await API.fetchAll();
    let { pickDate } = req.query;

    //date format yyyy-m-d
    if (pickDate) {
      const rd = data.filter((d) => {
        if (d.createdAt === pickDate) {
          return true;
        } else return false;
      });
      rd
        ? res.status(200).json(rd)
        : res.status(404).json("no data found on this day");
      console.log(rd);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieves all the files that has been archived by a user
exports.getArchivedFiles = async (req, res) => {
  try {
    const allFiles = await API.fetchAll();

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
    return error.response.data;
  }
};
