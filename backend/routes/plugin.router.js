const router = require('express').Router();
const { ping, info, sidebar } = require('../controllers/plugin.controller');

router.get('/ping', ping);
router.get('/info', info);
router.get('/sidebar', sidebar);


module.exports = router;