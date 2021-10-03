const DatabaseConnection = require('./database.helper')
const Activity = new DatabaseConnection('Activity')
// const axios = require('axios')

module.exports = async (userInfo, operation, filename) => {
 
  // when there is no logged in user || e.g when testing out of zuri.chat
  const defaultUserObj = {
    user_name: 'Anonymous User',
    img_url: 'https://www.gravatar.com/avatar/'
  }

  if (userInfo.userName || userInfo.imageUrl) {
    const data = {
      userObj: {
        user_name: userInfo.userName,
        img_url: userInfo.imageUrl
      },
      operation,
      filename,
      time: Date.now()
    }

    await Activity.create(data)
  } else {
    const data = {
      userObj: defaultUserObj,
      operation,
      filename,
      time: Date.now()
    }

    await Activity.create(data)
  }
}