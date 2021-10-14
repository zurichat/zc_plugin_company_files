const router = require('express').Router();

const Slack = require('../controllers/slack.controller');

router.post('/message', Slack.requestService)

module.exports = router;