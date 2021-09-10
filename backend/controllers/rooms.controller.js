const DatabaseConnection = require('../utils/database.helper');
const Rooms = new DatabaseConnection('NewRooms');
const appResponse = require('../utils/appResponse');
const RoomSchema = require('../models/Room');
const slugify = require('slugify');
const uuid = require('uuid').v4;
const { BadRequestError, ForbiddenError, NotFoundError } = require('../utils/appError');


exports.createRoom = async (req, res) => {
  const { body } = req;
  body.roomId = uuid();

  const room = await RoomSchema.validateAsync(body);
  room.members = [];
  room.slug = slugify(room.roomName, { lower: true, remove: /[*+~\/\\.()'"!:@]/g })
  console.log(room);

  if (room.roomType === 'inbox') {
    room.isPrivate = true;
    room.members = [room.ownerId, room.receiverId];
  } else if (room.roomType === 'group' || room.roomType === 'plugin') {
    room.members = [room.ownerId, ...room.members];
    delete room.receiverId;
  } else if (room.roomType === 'plugin' || room.roomType === 'channel') {
    room.isPrivate = false;
  }

  // Verify user ids later on...

  const response = await Rooms.create(room);

  res.status(201).send(appResponse('Room created successfully!', response, true));
}


exports.editRoom = async (req, res) => {
  const { body } = req;
  console.log(req.body);

  if (('members' in body)) delete body.members;

  await Rooms.update(req.params.roomId, body);

  const allRooms = await Rooms.fetchAll();
  const [updatedRoom] = allRooms.data.filter(room => room._id === req.params.roomId);

  res.status(200).send(appResponse('Room details updated!', updatedRoom, true));
}


exports.getAllRooms = async (req, res) => {
  const { data } = await Rooms.fetchAll();

  res.status(200).send(appResponse('All rooms', data, true));
}


exports.deleteRoom = async (req, res) => {
  // filter out the target room
  const response = await Rooms.delete(req.params.roomId);
  
  res.status(200).send(appResponse('Room has been deleted successfully!', response, true));
}


exports.addToRoom = async (req, res) => {
  // the info of the user to be added to a room
  const { userId } = req.body;

  if (!/^[0-9a-fA-F]{24}$/.test(userId)) {
    throw new BadRequestError('Invalid user id. Enter a valid object id!');
  }

  // fetch all the rooms available and get the target room with the provided room_id.
  let allRooms = await Rooms.fetchAll();
  const [room] = allRooms.data.filter(room => room._id === req.params.roomId);

  if (!room) throw new NotFoundError();

  if (room.isPrivate) throw new ForbiddenError(`You can't join a private room!`);

  const isUserInRoom = room.members.filter(id => id === userId).length;

  if (isUserInRoom) throw new BadRequestError('User is already in room!');

  // Add user to room...
  room.members.push(userId);
  delete room._id;

  // send the data to the api endpoint for update.
  await Rooms.update(req.params.roomId, room);

  allRooms = await Rooms.fetchAll();
  const [updatedRoom] = allRooms.data.filter(room => room._id === req.params.roomId);

  return res.status(200).send(appResponse(null, updatedRoom, true));
}


exports.removeFromRoom = async (req, res) => {
  // the info of the user to be removed from a room
  const { userId } = req.body;

  // fetch all the rooms available and get the target room with the provided room_id.
  let allRooms = await Rooms.fetchAll();
  const [room] = allRooms.data.filter(room => room._id === req.params.roomId);

  if (!room) throw new NotFoundError();

  // Check if room type is DM...
  if (room.roomType === 'inbox' && userId in room.members) {
    throw new BadRequestError(`You cannot leave a DM!`);
  } else if (room.roomType === 'inbox' && room.members.indexOf(userId) === -1) {
    throw new ForbiddenError('Access forbidden! You cannot join an already existing DM!');
  }

  // parse the room data and remove the target user data from it.
  room.members = room.members.filter(member => member !== userId );

  // clean up the room data
  delete room._id;

  // send the data to the api endpoint for update.
  await Rooms.update(req.params.roomId, room);

  allRooms = await Rooms.fetchAll();
  const [updatedRoom] = allRooms.data.filter(room => room._id === req.params.roomId);

  res.status(200).send(appResponse('User has been successfully removed from the room', updatedRoom, true));
}