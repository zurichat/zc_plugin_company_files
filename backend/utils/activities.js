const DatabaseConnection = require('./database.helper')
const Activity = new DatabaseConnection('Activity')

module.exports = async (userInfo, operation, filename) => {
  // when there is no logged in user || e.g when testing out of zuri.chat
  const defaultUserObj = {
    user_name: 'Falence Lemungoh',
    img_url: 'https://www.gravatar.com/avatar/'
  }

  const userObj = userInfo ? userInfo : defaultUserObj

  const data = {
    userObj,
    operation,
    filename,
    time: Date.now()
  }

  await Activity.create(data)
}