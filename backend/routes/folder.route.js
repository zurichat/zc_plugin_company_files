const router = require('express').Router();
const { folderCreate, folderUpdate, folderDetails, folderDelete } = require('../controllers/folder.controller');

router.post('/', folderCreate);

router.route('/:id')
  .get(folderDetails)
  .put(folderUpdate)
  .delete(folderDelete)

module.exports = router;