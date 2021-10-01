const router = require('express').Router();
const {
  createRoom,
  getAllRooms,
  getOneRoom,
  deleteRoom,
  addToRoom,
  removeFromRoom,
  editRoom,
  setRoomPrivate,
  getUserRooms,
  getRoomMembers
} = require('../controllers/rooms.controller');

// GET ALL AVAILABLE ROOMS
router.get('/all', getAllRooms);

// GET A ROOM
router.get('/:roomId',getOneRoom);

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

// MAKE ROOM PRIVATE
router.put('/setPrivate/:roomId', setRoomPrivate);

// GET USER ROOMS
router.get('/getUserRooms/:userId', getUserRooms);
router.get('/:roomId/get-room-members', getRoomMembers);

module.exports = router;
