const router = require('express').Router();
const { searchFilesAndFolders, searchSuggestion } = require('../controllers/search.controller');

router.get('/search/:orgId/:memberId', searchFilesAndFolders);
router.get('/search-suggestions/:orgId/:memberId', searchSuggestion);

module.exports = router;
