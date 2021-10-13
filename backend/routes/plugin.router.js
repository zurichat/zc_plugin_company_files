const router = require('express').Router();
const { ping, info, sidebar, sync } = require('../controllers/plugin.controller');

router.get('/ping', ping);
router.get('/info', info);
router.get('/sidebar', sidebar);
router.post('/sync', sync);

module.exports = router;
