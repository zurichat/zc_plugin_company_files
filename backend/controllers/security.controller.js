const axios = require('axios')

exports.callAll = async (req, res) => {

  
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

    let allResponse = []
    for (let i = 0 ; i < all.length ; i++) {
      try {
        const response = await axios.get(all[i])
        allResponse.push({
          url: all[i],
          status: response.status ? response.status : 'SUCCESS'
        })

      } catch (err) {
        allResponse.push({
          url: all[i],
          status: 'FAILED'
        })
      }
    }

    return res.status(200).json({
      allResponse
    })

}