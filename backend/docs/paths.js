const getAllFiles = require("./files/getAllFiles");
const getAllRooms = require("./rooms/getAllRooms");
const createRoom = require("./rooms/createRooms");
const getOneRoom = require("./rooms/getOneRoom");
const editRoom = require("./rooms/editRoom");
const deleteRoom = require("./rooms/deleteRoom");
const getAllFolders = require("./folders/getAllFolders");
const { getInfo, getPing, getSidebar } = require("./info/info");

module.exports = {
	paths: {
		"/files/all": {
			...getAllFiles,
		},
		"/rooms/all": {
			...getAllRooms,
		},
		"/rooms/create": {
			...createRoom,
		},
		"/rooms/:roomId": {
			...getOneRoom,
		},
		"/rooms/update/:roomId": {
			...editRoom,
		},
		"/rooms/delete/:roomId": {
			...deleteRoom,
		},
		"/folders/read": {
			...getAllFolders,
		},
		"/info": {
			...getInfo,
		},
		"/sidebar": {
			...getSidebar,
		},
		"/ping": {
			...getPing,
		},
	},
};
