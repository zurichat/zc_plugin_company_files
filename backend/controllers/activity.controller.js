const appResponse = require('../utils/appResponse')
const DatabaseConnection = require('./../utils/database.helper')
const Activity = new DatabaseConnection('Activity')

exports.getAllActivities = async (req, res) => {
  const activities = await Activity.fetchAll()

  res.status(200).send(appResponse('Activities successfully retrieved!', activities, true))
  // res.status(200).json({
  //   status: 'success',
  //   message: 'Activities successfully retrieved!',
  //   data: activities
  // })
}

exports.createNewActivity = async (req, res) => {
  const activity = await Activity.create({
    userObj: {
      user_name: 'Falence Lemungoh',
      img_url: 'https://www.gravatar.com/avatar/'
    },
    operation: 'added',
    filename: 'falence.jpg',
    time: Date.now()
  })

  // res.status(200).send(appResponse('Activities successfully retrieved!', activities, true))
  res.status(200).json({
    status: 'success',
    message: 'Activity successfully created!',
    data: activity
  })
}

exports.deleteActivity = async (req, res) => {
  const activity = await Activity.delete(req.params.id)
  if (activity) return res.status(200).send(appResponse('Activity successfully deleted!', null, true))

  res.status(404).send(appResponse('Activity not found!', null, true))
}