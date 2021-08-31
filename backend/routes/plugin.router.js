const router = require('express').Router();
const { info } = require('../controllers/plugin.controller');

router.get('/info', info);

module.exports = router;