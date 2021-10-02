const router = require("express").Router();

const {
  addFolderAccess,
  updateFolderAccess,
  createFolderAccess,
  getAllFoldersAccess,
} = require("../controllers/access.controller");

//Create a folder
router.post("/create", createFolderAccess);
//Get all folders
router.get("/getall", getAllFoldersAccess);
//Give Access to members
router.put("/give", addFolderAccess);
//Update folder Access
router.put("/update", updateFolderAccess);

module.exports = router;
