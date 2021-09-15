const router = require("express").Router();
const {
  folderCreate,
  folderUpdate,
  folderDetails,
  folderDelete,
  getAllFolders,
} = require("../controllers/folder.controller");

// CREATE A NEW FOLDER
router.post("/write", folderCreate);

// FETCH ALL THE FOLDERS FROM THE ENDPOINT
router.get("/read", getAllFolders);

// FETCH A SINGLE FOLDER DATA FROM THE ENDPOINT
router.get("/read/:id", folderDetails);

router.route("/write/:id").put(folderUpdate).delete(folderDelete);

module.exports = router;
