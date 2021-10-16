const router = require('express').Router();
const { searchFilesAndFolders,searchFileAndFolder,testSearch, searchSuggestion } = require('../controllers/search.controller');

router.get('/:orgId/:memberId', searchFilesAndFolders);
router.get('/fileAndFolder/', searchFileAndFolder);
router.get('/search-suggestions/:orgId/:memberId', searchSuggestion);
router.get('/testSearch/', testSearch)

module.exports = router;