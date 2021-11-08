const router = require('express').Router();
const { getAllActivities, deleteActivity } = require('./../controllers/activity.controller');

router.get('/', getAllActivities);
router.delete('/:id', deleteActivity);

module.exports = router;
