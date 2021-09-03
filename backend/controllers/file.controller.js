const ApiConnection = require("../utils/database.helper");
const API = new ApiConnection("File");

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
    });
    return res.status(200).json({
      response: { status: 200, message: "success", data: starredFiles }
    });
  } catch (err) {
    return res.status(500).json(err);
  }
}

exports.searchByDate = async (req, res) => {
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
    const allFiles = await Files.fetchAll();

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
}

// restore deleted file
exports.restoreFile = async (req, res) =>{
  
  try{
    //validate query
    if(!req.params.fileName){
      res.send("You did not specify a file")
    }

    //get file name from user query
    const file = req.query.id
    const response = await Files.fetchOne(file)

    if(response != 200){
      res.send("File not found")
    }
    const response_data = response.data

    if(response_data.isDeleted === 'true'){
      response_data.isDeleted = 'false'
      res.send("File restored")
    }

    if(response_data.isDeleted === 'false'){
      res.send("File not in recycle bin")
    }
    
  }catch(err){
    return res.status(500).json(err)
  }

}
