const router = require('express').Router();
const { fileCreate, fileUpdate, fileDetails, fileDelete } = require('../controllers/file.controller');

router.post('/', fileCreate);

router.route('/:id')
  .get(fileDetails)
  .put(fileUpdate)
  .delete(fileDelete)

module.exports = router;