const router = require('express').Router();
const {searchAllFiles, searchAndFilterFiles} = require('../controllers/search.controller');

router.get('/', searchAllFiles);
router.get('/filter', searchAndFilterFiles);

module.exports = router;