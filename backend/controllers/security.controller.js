const axios = require('axios')

exports.callAll = async (req, res) => {

  try {
    const all = [
      'https://companyfiles.zuri.chat/api/v1/files/all',
      'https://companyfiles.zuri.chat/api/v1/files/uploadStatus',
      'https://companyfiles.zuri.chat/api/v1/files/sort',
      'https://companyfiles.zuri.chat/api/v1/files/archive',
      'https://companyfiles.zuri.chat/api/v1/files/deletedFiles',
      'https://companyfiles.zuri.chat/api/v1/files/recentlyViewedImages',
      'https://companyfiles.zuri.chat/api/v1/files/recentlyViewedAudio',
      'https://companyfiles.zuri.chat/api/v1/files/recentlyViewedImages',
      'https://companyfiles.zuri.chat/api/v1/files/recentlyViewedVideos',
      'https://companyfiles.zuri.chat/api/v1/files/recentlyViewedDocs',
      'https://companyfiles.zuri.chat/api/v1/files/recentlyViewedCompressed',
      'https://companyfiles.zuri.chat/api/v1/folder/all',
      'https://companyfiles.zuri.chat/api/v1/folder/uploadStatus',
      'https://companyfiles.zuri.chat/api/v1/folder/sort',
      'https://companyfiles.zuri.chat/api/v1/folder/archive',
      'https://companyfiles.zuri.chat/api/v1/folder/deletedFiles',
      'https://companyfiles.zuri.chat/api/v1/folder/recentlyViewedImages',
      'https://companyfiles.zuri.chat/api/v1/folder/recentlyViewedAudio',
      'https://companyfiles.zuri.chat/api/v1/folder/recentlyViewedImages',
      'https://companyfiles.zuri.chat/api/v1/folder/recentlyViewedVideos',
      'https://companyfiles.zuri.chat/api/v1/folder/recentlyViewedDocs',
      'https://companyfiles.zuri.chat/api/v1/folder/recentlyViewedCompressed',
      'https://companyfiles.zuri.chat/api/v1/rooms/all',
      'https://companyfiles.zuri.chat/api/v1/rooms/getUserRooms',
      'https://companyfiles.zuri.chat/api/v1/rooms/members',
      'https://companyfiles.zuri.chat/api/v1/rooms/organization',
      'https://companyfiles.zuri.chat/api/v1/search/',
      'https://companyfiles.zuri.chat/api/v1/search/fileAndFolder',
      'https://companyfiles.zuri.chat/api/v1/search/testSearch',
      'https://companyfiles.zuri.chat/api/v1/activities/',
      'https://companyfiles.zuri.chat/api/v1/archive/',
      'https://companyfiles.zuri.chat/api/v1/plugin/ping',
      'https://companyfiles.zuri.chat/api/v1/plugin/info',
      'https://companyfiles.zuri.chat/api/v1/plugin/sidebar',
      'https://companyfiles.zuri.chat/api/v1/plugin/sidebar',

    ]

    // const request1 = await axios.get(all)
    // const request2 = await axios.get(uploadStatus)
    // const request3 = await axios.get(sort)
    // const request4 = await axios.get(archive)
    // const request5 = await axios.get(deletedFiles)

    let allResponse 
    for (let i = 0 ; i < all.length ; i++) {
      allResponse[i] = await axios.get(all[i])
    }

    await axios.all(allResponse)
      .then(axios.spread((...responses) => {
        res.status(200).json({
          responses
        })
      }))
      .catch(errors => {
        // console.log(errors)
        return res.status(403).json({
          status: "error",
          statusCode: 403,
          message: "Forbidden! Can't access all endpoints.",
          data: null,
        })
      })


  } catch (err) {
    return res.status(403).json({
      status: "error",
      statusCode: 403,
      message: "Forbidden! Can't access all endpoints.",
      data: null,
    })
  }
}