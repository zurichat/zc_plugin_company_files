const router = require('express').Router();
const { searchAndFilterFiles,searchFileAndFolder,testSearch } = require('../controllers/search.controller');

router.get('/', searchAndFilterFiles);
router.get('/fileAndFolder/', searchFileAndFolder)
router.get('/testSearch/', testSearch)

module.exports = router;