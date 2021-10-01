const router = require('express').Router();

const { folderCreate, folderUpdate, folderDetails, folderDelete, getAllFolders, recentlyViewed, searchStarredFolders, starFolder, unStarFolder} = require('../controllers/folder.controller');

// CREATE A NEW FOLDER
router.post('/write', folderCreate);

// FETCH ALL THE FOLDERS FROM THE ENDPOINT
router.get('/all', getAllFolders);

// FETCH A SINGLE FOLDER DATA FROM THE ENDPOINT
router.get('/read/:id', folderDetails);

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

module.exports = router;
