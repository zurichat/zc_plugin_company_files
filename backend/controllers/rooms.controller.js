const DatabaseConnection = require('../utils/database.helper');
const Rooms = new DatabaseConnection('TheNewRooms');
const RealTime = require('../utils/realtime.helper');
const appResponse = require('../utils/appResponse');
// const RoomSchema = require('../models/Room');
const RoomSchema = require('../models/NewRoom');
const slugify = require('slugify');
const uuid = require('uuid').v4;
const axios = require('axios').default;

const {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
} = require('../utils/appError');

const zuriCoreBaseUrl = "https://api.zuri.chat";

exports.createRoom = async (req, res) => {
  const { body } = req;
  const { memberEmail } = req.query;

  const room = await RoomSchema.validateAsync(body);


  if(!memberEmail) throw new BadRequestError('org member email required in query');

  // call zuri core for org member details;
  const getOrgMemberUrl = `${zuriCoreBaseUrl}/organizations/${body.org_id}/members/?query=${memberEmail}`;
  let creatorData; 
  try {
    const response = await axios.get(getOrgMemberUrl);
    if(!response.data[0])
     throw new NotFoundError(`member with email '${memberEmail}' not found`);

    const creator = response.data[0];
    room.room_member_ids = [creator._id]; 
    room.room_created_by = creator._id;  

  } catch (error) {
    throw new BadRequestError("something went wrong");
  }

  // room.members = [];
 
  // room.slug = slugify(room.roomName, {
  //   lower: true,
  //   remove: /[*+~\/\\.()''!:@]/g,
  // });

  // if (room.roomType === 'inbox') {
  //   room.isPrivate = true;
  //   room.members = [room.ownerId, room.receiverId];
  // } else if (room.roomType === 'group' || room.roomType === 'plugin') {
  //   room.members = [room.ownerId, ...room.members];
  //   delete room.receiverId;
  // } else if (room.roomType === 'plugin' || room.roomType === 'channel') {
  //   room.isPrivate = false;
  // }

  // Verify user ids later on...

  const response = await Rooms.create(room);

  res
    .status(201)
    .send(appResponse('Room created successfully!', response, true));
};

exports.editRoom = async (req, res) => {
  const { body } = req;
  const room = await Rooms.fetchOne({ _id: req.params.roomId });

  if (!room) throw new NotFoundError();
  if ('members' in body) delete body.members;

  await Rooms.update(req.params.roomId, body);

  const updatedRoom = await Rooms.fetchOne({ _id: req.params.roomId });

  res.status(200).send(appResponse('Room details updated!', updatedRoom, true));
};

exports.getAllRooms = async (req, res) => {
  const allRooms = await Rooms.fetchAll();

  allRooms.forEach(room => (room.memberCount = room.length));

  // response = await RealTime.publish('allRooms', response);

  res.status(200).send(appResponse('All rooms', allRooms, true));
};

exports.getOneRoom = async (req, res) => {
  const room = await Rooms.fetchOne({ _id: req.params.roomId });

  if (!room) throw new NotFoundError();

  res.status(200).send(appResponse('Room found!', room, true));
};

exports.deleteRoom = async (req, res) => {
  // filter out the target room
  const response = await Rooms.delete(req.params.roomId);

  res
    .status(200)
    .send(appResponse('Room has been deleted successfully!', response, true));
};

exports.addToRoom = async (req, res) => {
  // the info of the user to be added to a room
  const { userId } = req.body;
  if (!/^[0-9a-fA-F]{24}$/.test(userId)) {
    throw new BadRequestError('Invalid user id. Enter a valid object id!');
  }

  // fetch all the rooms available and get the target room with the provided room_id.
  const room = await Rooms.fetchOne({ _id: req.params.roomId });

  if (!room) throw new NotFoundError();

  if (room.isPrivate)
    throw new ForbiddenError(`You can't join a private room!`);

  const isUserInRoom = room.members.filter((id) => id === userId).length;

  if (isUserInRoom) throw new BadRequestError('User is already in room!');

  // Add user to room...
  room.members.push(userId);
  delete room._id;

  // send the data to the api endpoint for update.
  await Rooms.update(req.params.roomId, room);

  const {
    data: [updatedRoom],
  } = await Rooms.fetchOne({ _id: req.params.roomId });

  return res.status(200).send(appResponse(null, updatedRoom, true));
};

exports.removeFromRoom = async (req, res) => {
  // the info of the user to be removed from a room
  const { userId } = req.body;

  // fetch all the target room with the provided room_id.
  const room = await Rooms.fetchOne({ _id: req.params.roomId });

  if (!room) throw new NotFoundError();

  // Check if room type is DM...
  if (room.roomType === 'inbox' && userId in room.members) {
    throw new BadRequestError(`You cannot leave a DM!`);
  } else if (room.roomType === 'inbox' && room.members.indexOf(userId) === -1) {
    throw new ForbiddenError('Access forbidden! You cannot join an already existing DM!');
  }

  // parse the room data and remove the target user data from it.
  room.members = room.members.filter((member) => member !== userId);

  // clean up the room data
  delete room._id;

  // send the data to the api endpoint for update.
  await Rooms.update(req.params.roomId, room);

  const updatedRoom = await Rooms.fetchOne({ _id: req.params.roomId });

  res
    .status(200)
    .send(appResponse('User has been successfully removed from the room', updatedRoom, true));
};

exports.setRoomPrivate = async (req, res) => {
  const { userId } = req.body;
  const room = await Rooms.fetchOne({ _id: req.params.roomId });

  if (!room) throw new NotFoundError();

  const isUserOwner = room.ownerId === userId;

  if (!isUserOwner) {
    throw new ForbiddenError(`Access forbidden! You don't have access to make this room private!`);
  }

  await Rooms.update(req.params.roomId, { isPrivate: false });

  const updatedRoom = await Rooms.fetchOne({ _id: req.params.roomId });

  res.status(200).send(appResponse('Room set to private!', updatedRoom, true));
};

exports.getUserRooms = async (req, res) => {
  const { data } = await Rooms.fetchAll();
  const { userId } = req.params;

  const roomFound = data.filter((d) => d.members.includes(userId));
  if (roomFound.length === 0) {
    throw new NotFoundError();
  } else {
    res.status(200).send(appResponse('All rooms you\'re in', roomFound, true));
  }
  // 6138cb6e99bd9e223a37d8ea
  // 6139fe2859842c7444fb0218
};

exports.getRoomMembers = async (req, res) => {
  const {roomId } = req.params;

 
  const room = await Rooms.fetchOne({ _id: roomId });

  if (!room) throw new NotFoundError();
  
  const getOrgMembersUrl = `${zuriCoreBaseUrl}/organizations/${room.org_id}/members`;
 
  try {
    const response = await axios.get(getOrgMembersUrl);  

    room.members = response.data.filter(member => room.room_member_ids.includes(member._id));

  } catch (error) {
    throw new BadRequestError("something went wrong");
  }
  
  const members = room.members.map(({ user_name, status, first_name, last_name }) => ({ user_name, status, first_name, last_name }));
  const data = {
    room_name: room.room_name,
    room_url: room.room_url,
    room_image: room.room_image,
    members_count: room.members.length,
    members
  }

  return res.status(200).send(appResponse("Room Members Returned Successfully", data, true));

}
