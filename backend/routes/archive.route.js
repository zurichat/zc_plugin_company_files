const router = require('express').Router();
const { archiveFile } = require('../controllers/archive.controller');


router.get('/', archiveFile);

module.exports = router;