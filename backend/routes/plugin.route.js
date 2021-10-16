

const router = require('express').Router()
const { pluginInstallation , pluginUnInstallation} = require('./../controllers/plugin.app.controller')

router.post('/', pluginInstallation)
router.delete('/', )

module.exports = router