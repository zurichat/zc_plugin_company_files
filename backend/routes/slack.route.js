const router = require('express').Router();

const { requestService } = require('../controllers/slack.controller');

router.post('/message', requestService)

module.exports = router;