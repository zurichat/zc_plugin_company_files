const router = require('express').Router();

const {
  fileCreate,
  fileUpdate,
  fileDetails,
  fileDelete,
  getAllFiles,
  getArchivedFiles,
  getAllDeletedFiles,
  searchByDate,
  searchStarredFiles,
  toggleStarred,
} = require('../controllers/file.controller');

// CREATE A NEW FILE
router.post('/write', fileCreate);

// GET ALL THE FILES FROM THE ENDPOINT
router.get('/read', getAllFiles);

//star a particular file
router.patch('/star', toggleStarred);

// GET A SINGLE FILE DETAILS
router.get('/read/:id', fileDetails);

// GET ARCHIVED FILES
router.get('/archive', getArchivedFiles);

// SEARCH FILES BY DATE ADDED
router.get('/searchByDate', searchByDate);

// SEARCH STARRED FILES
router.get('/searchStarredFiles', searchStarredFiles)
// GET DELETED FILES
router.get('/deletedFiles', getAllDeletedFiles)

router.route('/file/write/:id')
  .put(fileUpdate)
  .delete(fileDelete)

module.exports = router;
