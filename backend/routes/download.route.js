const router = require('express').Router();
const { downloadFolder } = require('../controllers/download.controller');


router.get("/downloadFolder/:folderId",  downloadFolder);


module.exports = router;