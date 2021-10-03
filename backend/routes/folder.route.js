const router = require('express').Router();

const { 
  folderCreate,
  folderUpdate,
  folderDetails,
  folderDelete,
  getAllFolders,
  getFilesInFolder,
  recentlyViewed,
  searchStarredFolders,
  starFolder,
  unStarFolder,
  folderRename,
  folderDeleteWithFiles,
  copyFolder
} = require('../controllers/folder.controller');

// CREATE A NEW FOLDER
router.post('/create', folderCreate);

// FETCH ALL THE FOLDERS FROM THE ENDPOINT
router.get('/all', getAllFolders);

// FETCH ALL THE FILES IN A FOLDER
router.get('/:folderId/files', getFilesInFolder);

// FETCH A SINGLE FOLDER DATA FROM THE ENDPOINT
router.get('/read/:folderId', folderDetails);

router.get('/recentlyViewed', recentlyViewed)

router.route('/write/:id')
  .put(folderUpdate)
  .delete(folderDelete)

// SEARCH STARRED FOLDERS
router.get("/searchStarredFolders", searchStarredFolders);

// STAR A FOLDER
router.put('/starFolder/:id', starFolder);

// UNSTAR A FOLDER
router.put('/unStarFolder/:id', unStarFolder);

// RENAME A FOLDER
router.put('/rename/:folderId', folderRename);

// DELETE FOLDER AND FILES IN IT
router.delete('/deleteFolder/:folderId', folderDeleteWithFiles);

// CREATE COPY OF A FOLDER
router.get('/copyFolder/:folderId', copyFolder);

module.exports = router;
