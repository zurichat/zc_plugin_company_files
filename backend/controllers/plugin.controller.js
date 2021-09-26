const { version, author } = require('../../package.json');
const pluginName = 'Company Files Management Plug-In';
const { BadRequestError, UnAuthorizedError } = require('../utils/appError');
const RealTime = require('../utils/realtime.helper');
const DatabaseConnection = require('../utils/database.helper');
// const Rooms = new DatabaseConnection('NewRooms');
const Rooms = new DatabaseConnection('TheNewRooms');
const { PLUGIN_ID } =  process.env;
const authCheck = require('../utils/authcheck.helper');


exports.info = (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}`;

  res.status(200).json({
    status: 'success',
    pluginId: PLUGIN_ID || '6134c6a40366b6816a0b75cd',
    pluginName,
    pluginUrl: `${baseUrl}`,
    sidebarUrl: `${baseUrl}/api/v1/sidebar`,
    infoUrl: `${baseUrl}/api/v1/info`,
    pingUrl: `${baseUrl}/api/v1/ping`,
    description: 'An effective file management system that improves business workflow, organizes important data and provides a searchable database for quick retrieval.',
    author,
    version
  });
}


exports.sidebar = async (req, res) => {
  const { org, user } = req.query;

  if (!org || !user) {
    throw new BadRequestError('One or more query parameters are missing! Valid parameters are: org & user.');
  }

  // const isUserValidated = await authCheck(org, user, token);

  // if (!isUserValidated) throw new UnAuthorizedError();

  let data = await Rooms.fetchAll();
  data = data.map(({ room_name, room_url, room_image }) => ({ room_name, room_url, room_image }));

  // allRooms.forEach(room => room.memberCount = room.members.length);

  // Fetch ALL public rooms
  // const publicRooms = allRooms.filter(room => room.roomType === 'channel' && room.isPrivate === false);

  // Fetch rooms a user is in
  // const joinedRooms = allRooms.filter(room => room.members.indexOf(user) !== -1);

  // Fetch plugin rooms
  // const pluginRooms = allRooms.filter(room => room.roomType === 'plugin' && room.isPrivate === false);

  const sidebarListObject = {
    name: 'Company Files',
    description: 'An effective file management system that improves business workflow, organizes important data and provides a searchable database for quick retrieval.',
    plugin_id: PLUGIN_ID || '6134c6a40366b6816a0b75cd',
    organisation_id: org,
    user_id: user,
    group_name: 'Company Files',
    show_group: true,
    joined_rooms: [],
    public_rooms: [{
      room_name: 'Company Files',
      room_image: 'https://res.cloudinary.com/eyiajd/image/upload/v1630441863/sidebarplugin/Company%20File%20Management%20PlugIn%20%28Sidebar%20Icons%29/Files_sm4hss.svg',
      room_url: 'https://www.zuri.chat/companyfiles'
    }, ...data]
  }

  await RealTime.publish('sidebar', sidebarListObject)

  res.status(200).json({ ...sidebarListObject });
}


exports.ping = (req, res) => {
  res.status(200).json({ status: 'success', message: 'Server is up & running...' });
}