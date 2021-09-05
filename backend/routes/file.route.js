const router = require('express').Router();

const {
  fileCreate,
  fileRename,
  fileUpdate,
  fileDetails,
  fileDelete,
  getAllFiles,
  getArchivedFiles,
  searchByDate,
  searchStarredFiles,
  searchFileByIsDeleted,
  getAllDeletedFiles,
  searchBySize,
} = require('../controllers/file.controller');

// CREATE A NEW FILE
router.post('/write', fileCreate);

// GET ALL THE FILES FROM THE ENDPOINT
router.get('/read', getAllFiles);

// SEARCH FOR ALL DELETED FILES
router.get('/file/searchByisDeleted', searchFileByIsDeleted);

// GET A SINGLE FILE DETAILS
router.get('/read/:id', fileDetails);

// Renames file
router.post('/rename/:id', fileRename);

// GET ARCHIVED FILES
router.get('/archive', getArchivedFiles);

// SEARCH FILES BY DATE ADDED
router.get('/searchByDate', searchByDate);

// SEARCH STARRED FILES
router.get('/searchStarredFiles', searchStarredFiles)

// SEARCH FILES BY SIZE
router.get('/searchBySize/:size', searchBySize)

// GET DELETED FILES
router.get('/deletedFiles', getAllDeletedFiles)
router.route('/file/write/:id')
  .put(fileUpdate)
  .delete(fileDelete)

module.exports = router;
