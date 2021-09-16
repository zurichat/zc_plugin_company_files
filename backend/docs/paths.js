const getAllFiles = require('./files/getAllFiles');
const getAllRooms = require('./rooms/getAllRooms');
const getAllFolders = require('./folders/getAllFolders');

module.exports = {
    paths : {
        '/files/all': {
            ...getAllFiles
        },
        '/rooms/all': {
            ...getAllRooms
        },
        '/folders/read': {
            ...getAllFolders
        }
    }
}