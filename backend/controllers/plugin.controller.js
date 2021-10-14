/* eslint-disable camelcase */
const { version, author } = require("../../package.json");
const pluginName = "Company Files Management Plug-In";
const { BadRequestError, UnAuthorizedError } = require("../utils/appError");
const RealTime = require("../utils/realtime.helper");
const DatabaseConnection = require("../utils/database.helper");
// const Rooms = new DatabaseConnection('NewRooms');
const Rooms = new DatabaseConnection("TheNewRooms");
const { PLUGIN_ID } = process.env;
const authCheck = require("../utils/authcheck.helper");
const appResponse = require("../utils/appResponse");
const axios = require("../utils/axios.helper");
const databaseSyncUrl = 'https://api.zuri.chat/plugins/6134c6a40366b6816a0b75cd/sync';
const pluginInfoUrl = 'https://api.zuri.chat/marketplace/plugins/6134c6a40366b6816a0b75cd';

exports.info = (req, res) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;

  res.status(200).json({
    status: "success",
    pluginId: PLUGIN_ID || "61518d6c9d521e488c59745f",
    pluginName,
    pluginUrl: `${baseUrl}`,
    sidebarUrl: `${baseUrl}/api/v1/sidebar`,
    infoUrl: `${baseUrl}/api/v1/info`,
    pingUrl: `${baseUrl}/api/v1/ping`,
    description:
      "An effective file management system that improves business workflow, organizes important data and provides a searchable database for quick retrieval.",
    author,
    version,
  });
};

// append roomId to room_url
function handleRoomUrl(rooms) {
  return rooms.map((room) => {
    return `${room.room_url}/${room._id}`;
  });
}

exports.sidebar = async (req, res) => {
  const { org, user } = req.query;

  if (!org || !user) {
    throw new BadRequestError("One or more query parameters are missing! Valid parameters are: org & user.");
  }

  // const isUserValidated = await authCheck(org, user, token);

  // if (!isUserValidated) throw new UnAuthorizedError();

  let data = await Rooms.fetchAll({ org_id: org });
  handleRoomUrl(data);
  const defaultRooms = data.filter(room => room.isDefault && room.room_member_ids.includes(user))
  .map(({ room_name, room_url, room_image }) => ({ room_name, room_url, room_image }));
 

  data = data.filter(room => room.isDefault == undefined ? true : !room.isDefault)
  .map(({ room_name, room_url, room_image }) => ({ room_name, room_url, room_image }));

  // allRooms.forEach(room => room.memberCount = room.members.length);

  // Fetch ALL public rooms
  // const publicRooms = allRooms.filter(room => room.roomType === 'channel' && room.isPrivate === false);

  // Fetch rooms a user is in
  // const joinedRooms = allRooms.filter(room => room.members.indexOf(user) !== -1);

  // Fetch plugin rooms
  // const pluginRooms = allRooms.filter(room => room.roomType === 'plugin' && room.isPrivate === false);

  const sidebarListObject = {
    name: "Company Files",
    description:
      "An effective file management system that improves business workflow, organizes important data and provides a searchable database for quick retrieval.",
    plugin_id: PLUGIN_ID || "61518d6c9d521e488c59745f",
    organisation_id: org,
    user_id: user,
    group_name: "Company Files",
    show_group: true,
    button_url: "/companyfiles",
    category: "tools",
    joined_rooms: [
      {
        room_name: "All Company Files",
        room_url: "/companyfiles",
        room_image:
          "https://res.cloudinary.com/eyiajd/image/upload/v1630441863/sidebarplugin/Company%20File%20Management%20PlugIn%20%28Sidebar%20Icons%29/Files_sm4hss.svg",
      },
      ...defaultRooms,
    ],
    public_rooms: [...data],
  };

  await RealTime.publish("sidebar", sidebarListObject);

  res.status(200).json({ ...sidebarListObject });
};

exports.ping = (req, res) => {
  res
    .status(200)
    .json({ status: "success", message: "Server is up & running..." });
};

// Endpoint for syncing the plugin each time a new event occurs
// Possible events are a user joining or leaving a workspace for now.
exports.sync = async (req, res) => {
  const queue = await axios.get(`${pluginInfoUrl}`);
  const userList = queue.data.queue;

  if (!userList) {
    throw new BadRequestError("No queue to update");
  }
  const queueId = userList[userList.length - 1].id;

  for (let i = 0; i < userList.length; i++){

    const org_id = userList[i].message.organization_id;
    const rooms = await Rooms.fetchByFilter({ org_id });

    if (userList[i].event === "enter_organization"){

      for (let j = 0; j < userList.length; j++) {
        const {_id} = rooms[j];
        if (!rooms[j].isDefault){
          rooms[j].room_member_ids.push(userList[i].message.member_id);
          delete rooms[j]._id;
          rooms[j].room_modified_at = new Date();
          await Rooms.update(_id, rooms[j]);
        }
      }
    }

    if (userList[i].event === "leave_organization"){
      for (let k = 0; k < rooms.length; k++) {
        const {_id} = rooms[k];
        console.log("I left");
        rooms[k].room_member_ids = rooms[k].room_member_ids.filter((id) => id !== userList[i].message.member_id);
        rooms[k].room_modified_at = new Date();

        delete rooms[k]._id;

        await Rooms.update(_id, rooms[k]);
      }
    }
  }

  const data = await axios.patch(`${databaseSyncUrl}`, {id:queueId});

  res
      .status(200)
      .send(appResponse(
              "Synchronized Successfully",
              data,
              true
          ));
}