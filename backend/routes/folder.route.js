const router = require('express').Router();

const { folderCreate, folderUpdate, folderDetails, folderDelete, getAllFolders, getFilesInFolder, giveFolderAccess, deleteFolderAccess, recentlyViewed, searchStarredFolders, starFolder, unStarFolder} = require('../controllers/folder.controller');

// CREATE A NEW FOLDER
router.post('/create', folderCreate);

// FETCH ALL THE FOLDERS FROM THE ENDPOINT
router.get('/all', getAllFolders);

// FETCH ALL THE FILES IN A FOLDER
router.get('/:folderId/files', getFilesInFolder);

// FETCH A SINGLE FOLDER DATA FROM THE ENDPOINT
router.get('/read/:folderId', folderDetails);

router.get('/recentlyViewed', recentlyViewed)

// GIVE FOLDER ACCESS FROM THE ENDPOINT
router.get('/giveaccess', giveFolderAccess);

// DELETE FOLDER ACCESS FROM THE ENDPOINT
router.get('/deleteaccess', deleteFolderAccess);

router.route('/write/:id')
  .put(folderUpdate)
  .delete(folderDelete)

// SEARCH STARRED FOLDERS
router.get("/searchStarredFolders", searchStarredFolders);

// STAR A FOLDER
router.put('/starFolder/:id', starFolder);

// UNSTAR A FOLDER
router.put('/unStarFolder/:id', unStarFolder);

module.exports = router;
