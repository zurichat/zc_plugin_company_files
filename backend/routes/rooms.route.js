const router = require('express').Router();
const { 
    createRoom, 
    getAllRooms, 
    deleteRoom, 
    addToRoom, 
    removeFromRoom,
    editRoomInfo

} = require('../controllers/rooms.controller');

// GET ALL AVAILABLE ROOMS
router.get('/all', getAllRooms);

// CREATE A NEW ROOM
router.post('/create', createRoom);

// ADD A USER TO A ROOM
router.put('/add/:id', addToRoom);

// REMOVE A USER FROM A ROOM
router.put('/remove/:id', removeFromRoom);

// DELETE A ROOM
router.delete('/delete/:id', deleteRoom);

// EDIT A ROOM INFO
router.put('/update/:id', editRoomInfo);

module.exports = router;