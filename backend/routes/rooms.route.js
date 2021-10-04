const router = require('express').Router();
const {
  createRoom,
  getAllRooms,
  getOneRoom,
  deleteRoom,
  addToRoom,
  addUserToRoom,
  removeFromRoom,
  editRoom,
  setRoomPrivate,
  getUserRooms,
  getRoomMembers,
  checkMemberInRoom,
  getOrgDefaultRoomOnDomain
} = require('../controllers/rooms.controller');

// GET ALL AVAILABLE ROOMS
router.get('/all', getAllRooms);

// GET A ROOM
router.get('/room/:roomId',getOneRoom);

// CREATE A NEW ROOM
router.post('/create', createRoom);

// ADD TO ROOM (ZURI MAIN)
router.post('/add_to_room', addUserToRoom);

// ADD A USER TO A ROOM
router.put('/add/:roomId', addToRoom);

// REMOVE A USER FROM A ROOM
router.put('/remove/:roomId', removeFromRoom);

// DELETE A ROOM
router.put('/delete/:roomId', deleteRoom);

// EDIT A ROOM INFO
router.put('/update/:roomId', editRoom);

// MAKE ROOM PRIVATE
router.put('/setPrivate/:roomId', setRoomPrivate);

// GET USER ROOMS
router.get('/getUserRooms/:userId', getUserRooms);

// GET MEMBERS IN ROOM
router.get('/members/:roomId/getRoomMembers', getRoomMembers);

// GET ORG DEFAULT DOMAIN ROOM
router.get('/organization/:orgId',getOrgDefaultRoomOnDomain)

// CHECK IF USER IS IN ROOM
router.get('/user/:roomId/userInRoom', checkMemberInRoom);

module.exports = router;
