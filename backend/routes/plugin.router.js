const router = require('express').Router();
const { ping, info, sidebar, sync, install, getInstalled } = require('../controllers/plugin.controller');

router.get('/ping', ping);
router.get('/info', info);
router.get('/sidebar', sidebar);
router.post('/sync', sync);
router.post('/install', install);
// router.get('/installs', getInstalled);

module.exports = router;
