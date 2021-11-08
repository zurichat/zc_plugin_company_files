const router = require('express').Router();
const { ping, info, sidebar, sync, install, uninstall } = require('../controllers/plugin.controller');

router.get('/ping', ping);
router.get('/info', info);
router.get('/sidebar', sidebar);
router.post('/sync', sync);
router.post('/install', install);
router.delete('/install', uninstall);

module.exports = router;
