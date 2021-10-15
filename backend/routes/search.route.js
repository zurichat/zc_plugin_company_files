const router = require('express').Router();
const { searchFilesAndFolders,searchFileAndFolder,testSearch } = require('../controllers/search.controller');

router.get('/:orgId/:memberId', searchFilesAndFolders);
router.get('/fileAndFolder/', searchFileAndFolder)
router.get('/testSearch/', testSearch)

module.exports = router;