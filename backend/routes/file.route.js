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
  searchFileByIsDeleted,
} = require("../controllers/file.controller");

// CREATE A NEW FILE
router.post("/file/write", fileCreate);

// GET ALL THE FILES FROM THE ENDPOINT
router.get("/file/read", getAllFiles);

// SEARCH BY DATE ADDED
router.get("/file/searchByDate", fileSearchByDate);

// SEARCH FOR ALL DELETED FILES
router.get("/file/searchByisDeleted", searchFileByIsDeleted);

// GET A SINGLE FILE DETAILS
router.get("/file/read/:id", fileDetails);

module.exports = router;
