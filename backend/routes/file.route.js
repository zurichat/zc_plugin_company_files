const router = require('express').Router();
const { fileCreate, fileUpdate, fileDetails, fileDelete, fileSearchByDate, fileSearchByIsStarred  } = require('../controllers/file.controller');

router.post('/', fileCreate);
router.get('/searchByDate', fileSearchByDate)


// route to search for files if its starred
router.get('/searchByStar', fileSearchByIsStarred);

router.route('/:id')
  .get(fileDetails)
  .put(fileUpdate)
  .delete(fileDelete)

module.exports = router;