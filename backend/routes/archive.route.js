const router = require('express').Router();
const { archiveFile } = require('../controllers/archive.controller');


router.get('/download', archiveFile);

module.exports = router;