const router = require('express').Router();
const { 
  createRoom, 
  getAllRooms, 
  deleteRoom, 
  addToRoom, 
  removeFromRoom,
  editRoom
} = require('../controllers/rooms.controller');

// GET ALL AVAILABLE ROOMS
router.get('/all', getAllRooms);

// GET A ROOM
// router.get('/:roomId', getRoom);

// CREATE A NEW ROOM
router.post('/create', createRoom);

// ADD A USER TO A ROOM
router.put('/add/:roomId', addToRoom);

// REMOVE A USER FROM A ROOM
router.put('/remove/:roomId', removeFromRoom);

// DELETE A ROOM
router.delete('/delete/:roomId', deleteRoom);

// EDIT A ROOM INFO
router.put('/update/:roomId', editRoom);

module.exports = router;