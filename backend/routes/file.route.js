const router = require('express').Router();
const { fileCreate, fileUpdate, fileDetails, fileDelete, fileSearchByIsStarred } = require('../controllers/file.controller');

router.post('/', fileCreate);

// route to search for files if its starred
router.get('/searchByStars', fileSearchByIsStarred);

router.route('/:id')
  .get(fileDetails)
  .put(fileUpdate)
  .delete(fileDelete)

module.exports = router;