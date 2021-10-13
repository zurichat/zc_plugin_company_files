const router = require('express').Router();
const { getArchivedFiles, archiveFile } = require('../controllers/archived.controller');


// GET ARCHIVED FILES
router.get('/all', getArchivedFiles);

// ARCHIVE A FILE
router.put('/:fileId([0-9a-fA-F]{24})', archiveFile);


module.exports = router;