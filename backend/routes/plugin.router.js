const router = require('express').Router();
const { ping, info, sidebar, sync, install, getInstalled } = require('../controllers/plugin.controller');
const {pluginInstallation, pluginUnInstallation} = require('../controllers/plugin.app.controller')

router.get('/ping', ping);
router.get('/info', info);
router.get('/sidebar', sidebar);
router.post('/sync', sync);
router.post('/install', pluginInstallation);
router.delete('/install', pluginUnInstallation);
// router.get('/installs', getInstalled);

module.exports = router;
