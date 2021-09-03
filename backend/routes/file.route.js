const router = require('express').Router();
const {
  fileCreate,
  fileUpdate,
  fileDetails,
  fileDelete,
  getAllFiles,
  getArchivedFiles,
  searchByDate,
  searchStarredFiles,
} = require('../controllers/file.controller');

// CREATE A NEW FILE
router.post('/write', fileCreate);

<<<<<<< HEAD

router.route('/:id')
  .get(fileDetails)
=======
// GET ALL THE FILES FROM THE ENDPOINT
router.get('/read', getAllFiles);

// GET A SINGLE FILE DETAILS
router.get('/read/:id', fileDetails);

// GET ARCHIVED FILES
router.get('/archive', getArchivedFiles);

// SEARCH FILES BY DATE ADDED
router.get('/searchByDate', searchByDate);

// SEARCH STARRED FILES
router.get('/searchStarredFiles', searchStarredFiles)

router.route('/write/:id')
>>>>>>> f3e8523aa4bc81df36b4047bc1046b0cf82f8c44
  .put(fileUpdate)
  .delete(fileDelete)

module.exports = router;
