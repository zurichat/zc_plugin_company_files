const DatabaseConnection = require('./database.helper')
const Activity = new DatabaseConnection('Activity')

module.exports = async (operation, filename) => {
  const data = {
    userObj: {
      user_name: 'Falence Lemungoh',
      img_url: 'https://www.gravatar.com/avatar/'
    },
    operation,
    filename,
    time: Date.now()
  }

  await Activity.create(data)
}