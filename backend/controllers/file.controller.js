exports.fileCreate = async (req, res) => {
  
}

exports.fileDetails = async (req, res) => {

}

exports.fileUpdate = async (req, res) => {

}

exports.fileDelete = async (req, res) => {
  
}

exports.fileSearchByIsStarred = async (req, res) => {
  // seacrch the database for files that are starred
  const {stars} = req.query;

  try {
    // check if stars is a value
    if (stars) {
      // search for files that are starred
      const files = await File.find({isStarred: true});
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