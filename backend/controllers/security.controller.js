const axios = require('axios')

exports.callAll = async (req, res) => {

  try {
    const all = 'https://companyfiles.zuri.chat/api/v1/files/all'
    const uploadStatus = 'https://companyfiles.zuri.chat/api/v1/files/uploadStatus'
    const sort = 'https://companyfiles.zuri.chat/api/v1/files/sort'
    const archive = 'https://companyfiles.zuri.chat/api/v1/files/archive'
    const deletedFiles = 'https://companyfiles.zuri.chat/api/v1/files/deletedFiles'

    const request1 = await axios.get(all)
    const request2 = await axios.get(uploadStatus)
    const request3 = await axios.get(sort)
    const request4 = await axios.get(archive)
    const request5 = await axios.get(deletedFiles)

    axios.all([request1, request2, request3, request4, request5])
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