const router = require('express').Router();
const { archiveFile } = require('../controllers/archive.controller');


// Routing at ...api/v1/archive/download

router.get('/download', archiveFile);

module.exports = router;