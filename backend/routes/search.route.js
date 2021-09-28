const router = require('express').Router();
const { searchAndFilterFiles } = require('../controllers/search.controller');

router.get('/', searchAndFilterFiles);

module.exports = router;