/* eslint-disable camelcase */
const DatabaseConnection = require("../utils/database.helper");
const Rooms = new DatabaseConnection("TheNewRooms");
const RealTime = require("../utils/realtime.helper");
const appResponse = require("../utils/appResponse");
// const RoomSchema = require('../models/Room');
const RoomSchema = require("../models/NewRoom");
const slugify = require("slugify");
const uuid = require("uuid").v4;
const axios = require("axios").default;

const {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
} = require("../utils/appError");

const zuriCoreBaseUrl = "https://api.zuri.chat";

// tested - works
exports.createRoom = async (req, res) => {
  const { body } = req;

  body.room_creator_id = req.params.member_id;
  const room = await RoomSchema.validateAsync(body);

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

  // publish update to sidebar
  // await RealTime.sideBarPublish(room.org_id, room.room_creator_id, {
  //   message: `Room '${room.room_name}' created successfully`,
  // });

  // dtata to send to sidebar event
  responseData = {
    event: "sidebar_update",
    plugin_id: "61518d6c9d521e488c59745f",
    data: {
      group_name: "COMPANYFILES",
      id: response.data.object_id,
      name: "COMPANYFILES Plugin",
      show_group: false,
      category: "tools",
      button_url: "/companyfiles",
      public_rooms: [],
      joined_rooms: [
        {
          room_name: response.data.room_name,
          // room_url: `https://zuri.chat/companyfiles/${response.data.object_id}`,
          room_image:
            "https://res.cloudinary.com/eyiajd/image/upload/v1630441863/sidebarplugin/Company%20File%20Management%20PlugIn%20%28Sidebar%20Icons%29/Files_sm4hss.svg",
        },
      ],
    },
  };

  await RealTime.publish(
    `${room.org_id}_${room.room_creator_id}_sidebar`,
    JSON.stringify(responseData)
  );

  res
    .status(201)
    .send(appResponse("Room created successfully!", response, true));
};

// tested - waiting for zuri main
exports.addUserToRoom = async (req, res) => {
  const { user_name, _id } = req.body;

  // eslint-disable-next-line camelcase
  if (!user_name && !_id)
    throw new BadRequestError("one or more required fields missing in body");

  // fetch all the rooms available and get the target room with the provided room_id.
  // const room = await Rooms.fetchOne({ _id: req.params.roomId });
  // if (!room) throw new NotFoundError("room not found");

  // const isMemberInRoom = room.room_member_ids.filter(
  //   (id) => id === userId
  // ).length;
  // if (isMemberInRoom) throw new BadRequestError("user is already in room!");

  // // Add user to room...
  // room.room_member_ids.push(userId);
  // delete room._id;
  // room.room_modified_at = new Date();

  // // send the data to the api endpoint for update.
  // await Rooms.update(req.params.roomId, room);

  // const updatedRoom = await Rooms.fetchOne({ _id: req.params.roomId });

  // // publish update to sidebar
  // await RealTime.sideBarPublish(room.org_id, userId, {
  //   message: `${user_name} joined ${room.room_name} successfully`,
  //   userId,
  // });

  return res.status(200).send(appResponse(null, `${user_name} recieved`, true));
};

// tested - works
exports.editRoom = async (req, res) => {
  const { body } = req;
  const room = await Rooms.fetchOne({ _id: req.params.roomId });

  if (!room) throw new NotFoundError();
  if ("members" in body) delete body.members;

  await Rooms.update(req.params.roomId, body);

  const updatedRoom = await Rooms.fetchOne({ _id: req.params.roomId });

  // publish update to sidebar
  RealTime.publish(`${room.org_id}_updateRoom`, {
    message: `${room.room_name} updated`,
  });

  res.status(200).send(appResponse("Room details updated!", updatedRoom, true));
};

// tested - works
exports.getAllRooms = async (req, res) => {
  const allRooms = await Rooms.fetchAll();

  allRooms.forEach((room) => (room.memberCount = room.length));

  // response = await RealTime.publish('allRooms', response);

  res.status(200).send(appResponse("All rooms", allRooms, true));
};

// tested - works
exports.getOneRoom = async (req, res) => {
  const room = await Rooms.fetchOne({ _id: req.params.roomId });

  if (!room) throw new NotFoundError();

  res.status(200).send(appResponse("Room found!", room, true));
};

// tested - works
exports.deleteRoom = async (req, res) => {
  // filter out the target room
  const response = await Rooms.delete(req.params.roomId);
  console.log(response);
  // publish update to sidebar
  await RealTime.publish(`deletedRoom`, {
    message: `room deleted`,
  });

  res
    .status(200)
    .send(appResponse("Room has been deleted successfully!", response, true));
};

// tested - works
exports.addToRoom = async (req, res) => {
  // the info of the user to be added to a room
  const { userId, orgId, userName } = req.body;
  // if (!/^[0-9a-fA-F]{24}$/.test(memberId)) {
  //   throw new BadRequestError('Invalid member id. Enter a valid object id!');
  // }
  // console.log({ userId, orgId, userName });
  if (!userId && !orgId)
    throw new BadRequestError("one or more required fields missing in body");

  // fetch all the rooms available and get the target room with the provided room_id.
  const room = await Rooms.fetchOne({ _id: req.params.roomId });

  if (!room) throw new NotFoundError("room not found");

  if (room.private) throw new ForbiddenError(`You can't join a private room!`);

  const isMemberInRoom = room.room_member_ids.filter(
    (id) => id === userId
  ).length;

  if (isMemberInRoom) throw new BadRequestError("user is already in room!");

  // Add user to room...
  room.room_member_ids.push(userId);
  delete room._id;
  room.room_modified_at = new Date();

  // send the data to the api endpoint for update.
  await Rooms.update(req.params.roomId, room);

  const updatedRoom = await Rooms.fetchOne({ _id: req.params.roomId });

  // publish update to sidebar
  await RealTime.sideBarPublish(room.org_id, userId, {
    message: `${userName} joined ${room.room_name} successfully`,
    userId,
  });

  return res.status(200).send(appResponse(null, updatedRoom, true));
};

//::: ENDPOINT FOR ADDING MULTIPLE USERS TO A ROOM
exports.addMultiUsersToRoom = async (req, res) => {
  // the info of the user to be added to a room
  const { room_id, members_id } = req.body;

  if (!room_id && !members_id)
    throw new BadRequestError("one or more required fields missing in body");

  // fetch all the rooms available and get the target room with the provided room_id.
  const room = await Rooms.fetchOne({ _id: room_id });

  if (!room) throw new NotFoundError("room not found");

  if (room.private) throw new ForbiddenError(`You can't join a private room!`);

  // const isMemberInRoom = room.room_member_ids.filter(
  //   (id) => id === userId
  // ).length;
  let isIn = [];
  let isValid = []
  members_id.forEach(member => {
    let checkIn = room.room_member_ids.filter((id) => id === member);
    if(checkIn.length > 0){
      isIn.push(member)
    }else{
      isValid.push(member)
    }
  });

  if (isIn.length > 0) throw new BadRequestError(`user(s) with id: ${isIn} is already in room!`);

  // Add user to room...
  room.room_member_ids.push(...isValid);
  delete room._id;
  room.room_modified_at = new Date();

  // send the data to the api endpoint for update.
  await Rooms.update(room_id, room);

  const updatedRoom = await Rooms.fetchOne({ _id: room_id });

  // publish update to sidebar
  await RealTime.sideBarPublish(room.org_id, isValid[0], {
    message: `User(s) ${[...isValid]} joined ${room.room_name} successfully`,
    userId: isValid[0],
    members_id
  });

  // dtata to send to sidebar event
  responseData = {
    event: "sidebar_update",
    plugin_id: "61518d6c9d521e488c59745f",
    data: {
      group_name: "COMPANYFILES",
      name: "COMPANYFILES Plugin",
      show_group: false,
      button_url: "/companyfiles",
      public_rooms: [],
      joined_rooms: [
        {
          room_url: `companyfiles/${room._id}`,
          room_name: room.room_name,
          room_image:
            "https://res.cloudinary.com/eyiajd/image/upload/v1630441863/sidebarplugin/Company%20File%20Management%20PlugIn%20%28Sidebar%20Icons%29/Files_sm4hss.svg",
        },
      ],
    },
  };

  await RealTime.publish(
    `${room.org_id}_${room.room_creator_id}_sidebar`,
    JSON.stringify(responseData)
  );

  return res.status(200).send(appResponse(null, updatedRoom, true));
};


//::: ENDPOINT FOR REMOVING MULTIPLE USERS FROM A ROOM
exports.removeMultiUsersFromRoom = async (req, res) => {
  // the info of the users to be removed from a room
  // const { userId, userName } = req.body;
  const { room_id, members_id } = req.body;

  // fetch all the target room with the provided room_id.
  const room = await Rooms.fetchOne({ _id: room_id });

  if (!room) throw new NotFoundError();

  // Check if room type is DM...
  // if (room.roomType === 'inbox' && userId in room.members) {
  //   throw new BadRequestError(`You cannot leave a DM!`);
  // } else if (room.roomType === 'inbox' && room.members.indexOf(userId) === -1) {
  //   throw new ForbiddenError('Access forbidden! You cannot join an already existing DM!');
  // }

  // parse the room data and remove the target user data from it.
  room.room_member_ids = room.room_member_ids.filter((id) => {
    return members_id.indexOf(id) < 0
  });
  room.room_modified_at = new Date();
  // clean up the room data
  delete room._id;

  // send the data to the api endpoint for update.
  await Rooms.update(room_id, room);

  const updatedRoom = await Rooms.fetchOne({ _id: room_id });

  // publish update to sidebar
  RealTime.sideBarPublish(room.org_id, members_id[0], {
    message: `User(S) ${members_id} left ${room.room_name} successfully`,
    userId: members_id[0],
    members_id
  });

   // dtata to send to sidebar event
   responseData = {
    event: "sidebar_update",
    plugin_id: "61518d6c9d521e488c59745f",
    data: {
      group_name: "COMPANYFILES",
      name: "COMPANYFILES Plugin",
      show_group: false,
      button_url: "/companyfiles",
      public_rooms: [],
      joined_rooms: [],
    },
  };

  await RealTime.publish(
    `${room.org_id}_${room.room_creator_id}_sidebar`,
    JSON.stringify(responseData)
  );

  res
    .status(200)
    .send(
      appResponse(
        "User has been successfully removed from the room",
        updatedRoom,
        true
      )
    );
};


// not tested yet
exports.removeFromRoom = async (req, res) => {
  // the info of the user to be removed from a room
  const { userId, userName } = req.body;

  // fetch all the target room with the provided room_id.
  const room = await Rooms.fetchOne({ _id: req.params.roomId });

  if (!room) throw new NotFoundError();

  // Check if room type is DM...
  // if (room.roomType === 'inbox' && userId in room.members) {
  //   throw new BadRequestError(`You cannot leave a DM!`);
  // } else if (room.roomType === 'inbox' && room.members.indexOf(userId) === -1) {
  //   throw new ForbiddenError('Access forbidden! You cannot join an already existing DM!');
  // }

  // parse the room data and remove the target user data from it.
  room.room_member_ids = room.room_member_ids.filter((id) => id !== userId);
  room.room_modified_at = new Date();

  // clean up the room data
  delete room._id;

  // send the data to the api endpoint for update.
  await Rooms.update(req.params.roomId, room);

  const updatedRoom = await Rooms.fetchOne({ _id: req.params.roomId });

  // publish update to sidebar
  RealTime.sideBarPublish(room.org_id, userId, {
    message: `${userName} left ${room.room_name} successfully`,
    userId,
  });

  res
    .status(200)
    .send(
      appResponse(
        "User has been successfully removed from the room",
        updatedRoom,
        true
      )
    );
};

// not tested yet
exports.setRoomPrivate = async (req, res) => {
  const { userId } = req.body;
  const room = await Rooms.fetchOne({ _id: req.params.roomId });

  if (!room) throw new NotFoundError();

  const isUserOwner = room.ownerId === userId;

  if (!isUserOwner) {
    throw new ForbiddenError(
      `Access forbidden! You don't have access to make this room private!`
    );
  }

  await Rooms.update(req.params.roomId, { isPrivate: false });

  const updatedRoom = await Rooms.fetchOne({ _id: req.params.roomId });

  res.status(200).send(appResponse("Room set to private!", updatedRoom, true));
};

// tested - works
exports.getUserRooms = async (req, res) => {
  const rooms = await Rooms.fetchAll();
  const { userId } = req.params;

  const roomFound = rooms.filter(
    (room) => room.room_member_ids && room.room_member_ids.includes(userId)
  );
  if (roomFound.length === 0) {
    throw new NotFoundError("User is not in any room");
  } else {
    res.status(200).send(appResponse("All rooms you're in", roomFound, true));
  }
  // 6138cb6e99bd9e223a37d8ea
  // 6139fe2859842c7444fb0218
};

// tested - works need to get the token from req.headers
exports.getRoomMembers = async (req, res) => {
  const { roomId } = req.params;
  const token = req.headers.authorization;
  const [, userToken] = token.split(" ");

  const room = await Rooms.fetchOne({ _id: roomId });
  // console.log(req.headers.authorization);
  // remove bearer from the authorization
  const myToken = process.env.ORG_TOKEN ?? userToken;
  if (myToken === "") throw new BadRequestError("Pass in a valid token");
  const config = {
    authorization: myToken,
  };

  if (!room) throw new NotFoundError("No users in this room");
  const orgMembers = await axios.get(
    `${zuriCoreBaseUrl}/organizations/${room.org_id}/members/`,
    { config }
  );
  // check if the id in room matches the id in the org member list
  const roomMembers = orgMembers.data.filter((member) =>
    room.room_member_ids.includes(member._id)
  );
  const data = {
    ...room,
    members_count: room.room_member_ids.length,
    members: roomMembers.map((member) => {
      return {
        _id: member._id,
        user_name: member.user_name,
        status: member.status,
        image_url: member.image_url,
      };
    }),
  };

  return res
    .status(200)
    .send(appResponse("Room Members Returned Successfully", data, true));
};

// tested - works
exports.getOrgDefaultRoomOnDomain = async (req, res) => {
  const { domain } = req.query;
  const { orgId } = req.params;

  if (!domain) domain = "base";

  let room = await Rooms.fetchOne({ room_domain: domain, org_id: orgId });

  // console.log(room)
  room = room ? room[0] : null;

  if (!room) throw new NotFoundError();

  const data = {
    room_id: room._id,
    room_name: room.room_name,
    room_url: room.room_url,
    room_image: room.room_image,
  };

  return res
    .status(200)
    .send(
      appResponse(
        `Organization default ${domain} room returned successfully`,
        data,
        true
      )
    );
};

// tested - works
exports.checkMemberInRoom = async (req, res) => {
  const { userId, orgId } = req.query;
  // if (!/^[0-9a-fA-F]{24}$/.test(memberId)) {
  //   throw new BadRequestError('Invalid member id. Enter a valid object id!');
  // }

  if (!userId || !orgId)
    throw new BadRequestError("one or more required fields missing in body");

  // fetch the target room with the provided room_id.
  const room = await Rooms.fetchOne({ _id: req.params.roomId });

  if (!room) throw new NotFoundError("room not found");

  const isMemberInRoom = room.room_member_ids.filter((id) => id === userId)
    .length
    ? true
    : false;

  const data = { isMemberInRoom };

  return res
    .status(200)
    .send(appResponse("room member check returned successfully", data, true));
};
