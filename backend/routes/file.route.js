const router = require('express').Router();
const {
  fileCreate,
  fileUpdate,
  fileDetails,
  fileDelete,
  getAllFiles,
  getArchivedFiles,
  fileSearchByIsStarred,
} = require('../controllers/file.controller');

// CREATE A NEW FILE

router.post('/file/write', fileCreate);

// GET ALL THE FILES FROM THE ENDPOINT
router.get('/file/read', getAllFiles);

// GET A SINGLE FILE DETAILS
router.get('/file/read/:id', fileDetails);

// GET ARCHIVED FILES
router.get('/archive', getArchivedFiles);


router.get('/searchByIsStarred', fileSearchByIsStarred)

router.route('/file/write/:id')
  .put(fileUpdate)
  .delete(fileDelete)

module.exports = router;
