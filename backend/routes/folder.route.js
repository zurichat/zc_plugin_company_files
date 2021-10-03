const router = require("express").Router();

const {
  folderCreate,
  folderUpdate,
  folderDetails,
  folderDelete,
  getAllFolders,
  getFilesInFolder,
  giveFolderAccess,
  updateFolderAccess,
  deleteFolderAccess,
  recentlyViewed,
  searchStarredFolders,
  starFolder,
  unStarFolder,
  addFileToFolder,
  removeFileFromFolder
} = require("../controllers/folder.controller");

// CREATE A NEW FOLDER
router.post("/create", folderCreate);

// FETCH ALL THE FOLDERS FROM THE ENDPOINT
router.get("/all", getAllFolders);

// FETCH ALL THE FILES IN A FOLDER
router.get("/allFiles/:folderId/files", getFilesInFolder);

// FETCH A SINGLE FOLDER DATA FROM THE ENDPOINT
router.get("/read/:folderId/folders", folderDetails);

router.get("/recentlyViewed", recentlyViewed);

// GIVE FOLDER ACCESS FROM THE ENDPOINT
router.get("/giveaccess", giveFolderAccess);

// GIVE FOLDER ACCESS FROM THE ENDPOINT
router.get("/updateaccess", updateFolderAccess);

// DELETE FOLDER ACCESS FROM THE ENDPOINT
router.get("/deleteaccess", deleteFolderAccess);

router.route("/write/:id").put(folderUpdate).delete(folderDelete);

// SEARCH STARRED FOLDERS
router.get("/searchStarredFolders", searchStarredFolders);

// STAR A FOLDER
router.put("/starFolder/:id", starFolder);

// UNSTAR A FOLDER
router.put("/unStarFolder/:id", unStarFolder);

// ADD FILE TO FOLDER
router.put('/add/:fileId/:folderId', addFileToFolder);

// REMOVE FILE FROM FOLDER
router.put('/remove/:fileId/:folderId', removeFileFromFolder);

module.exports = router;
