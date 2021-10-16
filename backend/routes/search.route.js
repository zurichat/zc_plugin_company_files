const router = require('express').Router();
const { searchFilesAndFolders,searchFileAndFolder,testSearch, searchSuggestion } = require('../controllers/search.controller');

router.get('/search/:orgId/:memberId', searchFilesAndFolders);
router.get('/search/fileAndFolder/', searchFileAndFolder);
router.get('/search-suggestions/:orgId/:memberId', searchSuggestion);
router.get('/search/testSearch/', testSearch)

module.exports = router;