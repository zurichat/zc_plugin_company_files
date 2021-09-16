const getAllFiles = require('./files/getAllFiles');
const getAllRooms = require('./rooms/getAllRooms');
module.exports = {
    paths : {
        '/files/all': {
            ...getAllFiles
        },
        '/rooms/all': {
            ...getAllRooms
        }
    }
}