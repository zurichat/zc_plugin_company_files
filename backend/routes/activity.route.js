const router = require('express').Router()
const { getAllActivities, deleteActivity, createNewActivity } = require('./../controllers/activity.controller')

router.get('/', getAllActivities)
router.post('/', createNewActivity)
router.delete('/:id', deleteActivity)

module.exports = router