const DatabaseConnection = require('./database.helper')
const Activity = new DatabaseConnection('Activity')
// const axios = require('axios')

module.exports = async (userInfo, operation, filename) => {
 
  // when there is no logged in user || e.g when testing out of zuri.chat
  // if were on localhost dont log the activity
  if (process.env.NODE_ENV === 'development' && (userInfo === undefined || userInfo === null)) {
    return
  }
  const defaultUserObj = {
    user_name: 'Anonymous User',
    img_url: 'https://www.gravatar.com/avatar/'
  }

  if (userInfo.userName !== undefined && userInfo.imageUrl !== undefined) {
    const data = {
      userObj: {
        user_name: userInfo.userName,
        img_url: userInfo.imageUrl,
        user_id: userInfo.userId
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