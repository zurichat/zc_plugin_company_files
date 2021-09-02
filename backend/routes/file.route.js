const router = require('express').Router();
const { fileCreate, fileUpdate, fileDetails, fileDelete, getAllFiles } = require('../controllers/file.controller');

// CREATE A NEW FILE
router.post('/write', fileCreate);

// GET ALL THE FILES FROM THE ENDPOINT
router.get('/read', getAllFiles);

// GET A SINGLE FILE DETAILS
router.get('/read/:id', fileDetails);

router.route('/write/:id')
  .put(fileUpdate)
  .delete(fileDelete)

module.exports = router;