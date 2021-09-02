const File = require("../models/File")

exports.fileCreate = async (req, res) => {

};

exports.fileDetails = async (req, res) => {

}

exports.fileUpdate = async (req, res) => {

}

exports.fileDelete = async (req, res) => {

}

exports.fileSearchByIsStarred = async (req, res) => {
  // search the database for files that are starred
  const { stars } = req.params;
  console.log(stars)

  try {
    // check if stars is a value
    if (!stars || stars === '') {
      res.status(400).json({
        status: 'error',
        message: 'stars is required'
      });
    }
    // search for files that are starred
    if (stars) {
      const files = await File.find({ isStarred: true });
      return res.status(200).json({
        success: true,
        count: files.length,
        data: files
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

exports.fileSearchByDate = async (req, res) => {
  let { startDate, endDate } = req.query;

  try {
    if (startDate === '') {
      return res.status(400).json("pick a date")
    }

    //use this to search for files from your input date till present

    if (startDate && endDate) {
      const file = await File.find({
        createdAt: {
          $gte: new Date(new Date(startDate).setHours(00, 00, 00)),
          $lt: new Date(new Date(endDate).setHours(23, 59, 59))
        }
      }).sort({ createdAt: "asc" })

      file.length === 0 ? res.status(404).json(`No files found between ${startDate} and ${endDate}`) : res.status(200).json(file)
    }

    //use this to search for files from your input date till present

    if (startDate && !endDate) {
      const file = await File.find({
        createdAt: {
          $gte: new Date(new Date(startDate).setHours(00, 00, 00))
        }
      }).sort({ createdAt: "asc" })

      file.length === 0 ? res.status(404).json(`No files found from ${startDate} till date`) : res.status(200).json(file)
    }

    //to get files for the only one day end and start date should be the same 
  } catch (error) {
    res.status(500).json(error)
  }
}