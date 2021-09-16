const getAllFiles = require('./files/getAllFiles');
const getAllRooms = require('./rooms/getAllRooms');
const getAllFolders = require('./folders/getAllFolders');
const {getInfo, getPing, getSidebar} = require('./info/info');

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
        },
        '/info': {
            ...getInfo
        },
        '/sidebar': {
            ...getSidebar
        },
        '/ping': {
            ...getPing
        }
    }
}