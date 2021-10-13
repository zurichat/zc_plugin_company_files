const router = require('express').Router();
const { searchFilesAndFolders,searchFileAndFolder,testSearch } = require('../controllers/search.controller');

router.get('/', searchFilesAndFolders);
router.get('/fileAndFolder/', searchFileAndFolder)
router.get('/testSearch/', testSearch)

module.exports = router;