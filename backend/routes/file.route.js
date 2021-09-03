const router = require("express").Router();
const {
  fileCreate,
  fileUpdate,
  fileDetails,
  fileDelete,
  getAllFiles,
  fileSearchByIsStarred,
  getArchivedFiles,
  fileSearchByDate,
} = require("../controllers/file.controller");

// CREATE A NEW FILE
router.post("/file/write", fileCreate);

// GET ALL THE FILES FROM THE ENDPOINT
router.get("/file/read", getAllFiles);

// SEARCH BY DATE ADDED
router.get("/searchByDate", fileSearchByDate);

// GET A SINGLE FILE DETAILS
router.get("/file/read/:id", fileDetails);

module.exports = router;
