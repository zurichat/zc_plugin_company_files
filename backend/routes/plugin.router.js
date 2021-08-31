const router = require('express').Router();
const { info, sidebar } = require('../controllers/plugin.controller');

router.get('/info', info);
router.get('/sidebar', sidebar);

module.exports = router;