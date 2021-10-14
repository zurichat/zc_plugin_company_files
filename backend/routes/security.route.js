const router = require('express').Router()
const { callAll } = require('./../controllers/security.controller')

router.get('/', callAll)

module.exports = router