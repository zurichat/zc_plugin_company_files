/* eslint-disable valid-jsdoc */
const { version, author } = require('../../package.json');
const pluginName = 'Company Files Management Plug-In';
const { BadRequestError } = require('../utils/appError');
const RealTime = require('../utils/realtime.helper');
const DatabaseConnection = require('../utils/database.helper');
// const Rooms = new DatabaseConnection('Rooms');
const Rooms = new DatabaseConnection('TheNewRooms');
const Installation = new DatabaseConnection('Installation');
const PLUGIN_ID = process.env.PLUGIN_ID || '61696153b2cc8a9af4833d6a';
// const authCheck = require('../utils/authcheck.helper');
const appResponse = require('../utils/appResponse');
const axios = require('../utils/axios.helper');


const databaseSyncUrl = `https://api.zuri.chat/plugins/${PLUGIN_ID}/sync`;
const pluginInfoUrl = `https://api.zuri.chat/marketplace/plugins/${PLUGIN_ID}`;


exports.info = (req, res) => {
	const baseUrl = `${req.protocol}://${req.get('host')}`;

	res.status(200).json({
		status: 'success',
		pluginId: PLUGIN_ID || '6169d79a4bfde011fe582e4a',
		pluginName,
		pluginUrl: `${baseUrl}`,
		sidebarUrl: `${baseUrl}/api/v1/sidebar`,
		infoUrl: `${baseUrl}/api/v1/info`,
		pingUrl: `${baseUrl}/api/v1/ping`,
		description:
      'An effective file management system that improves business workflow, organizes important data and provides a searchable database for quick retrieval.',
		author,
		version
	});
}


exports.getInstalled = async (req, res) => {
	const installed = await Installation.fetchAll();
	res.status(200).send({ success: true, number_of_installs: installed.length, data: installed })
}


/**
 * @desc    Installs a plugin into an organisation
 * @route   POST /api/v1/install
 * @access  Private
 */
exports.install = async (req, res) => {
	const installSuccess = {
		message: 'Files Plugin successfully installed!',
		success: true,
		data: {
			redirect_url: '/companyfiles'
		}
	}
  
	const installRequest = await InstallationSchema.validateAsync(req.body);

	if (installRequest.error)
		return res.status(402).send({
			message: installRequest.error,
			success: false,
			data: null
		});
  
	// if (install.user_id === undefined || install.organisation_id === undefined) 
	//   return res.send({ message: 'Please provide the required data to install a plugin.'})
  
	const organizations = await Installation.fetchAll();

	const orgExists = organizations.filter(org => org.org_id === installRequest.organization_id && org.org_id !== undefined)

	if (orgExists.length > 0) return res.send({
		message: 'Files Plugin has already been installed to the provided organization.',
		success: false,
		data: null
	});

	installRequest.org_id = installRequest.organization_id;
	delete installRequest.organization_id;
	await Installation.create(installRequest);
  
	return res.status(201).send({ installSuccess });
}


/**
 * @desc    Uninstalls a plugin from an organisation
 * @route   DELETE /api/v1/install
 * @access  Private
 */
exports.uninstall = async (req, res) => {

}

// append roomId to room_url
function handleRoomUrl(rooms) {
	return rooms.map((room) => {
		return `${room.room_url}/${room._id}`;
	});
}


/**
 * @desc    Retrieves all rooms a user is in
 * @route   GET /api/v1/sidebar
 * @access  Private
 */
exports.sidebar = async (req, res) => {
	const { org, user } = req.query;

	if (!org || !user) {
		throw new BadRequestError('One or more query parameters are missing! Valid parameters are: org & user.');
	}

	// const isUserValidated = await authCheck(org, user, token);

	// if (!isUserValidated) throw new UnAuthorizedError();

	let data = await Rooms.fetchAll({ org_id: org });
	handleRoomUrl(data);

	/* eslint-disable camelcase */
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
		name: 'Company Files',
		description:
      'An effective file management system that improves business workflow, organizes important data and provides a searchable database for quick retrieval.',
		plugin_id: PLUGIN_ID || '6169d79a4bfde011fe582e4a',
		organisation_id: org,
		user_id: user,
		group_name: 'Company Files',
		show_group: true,
		button_url: '/companyfiles',
		category: 'tools',
		joined_rooms: [
			{
				room_name: 'All Company Files',
				room_url: '/companyfiles',
				room_image:
          'https://res.cloudinary.com/eyiajd/image/upload/v1630441863/sidebarplugin/Company%20File%20Management%20PlugIn%20%28Sidebar%20Icons%29/Files_sm4hss.svg',
			},
			...defaultRooms,
		],
		public_rooms: [...data],
	}

	await RealTime.publish('sidebar', sidebarListObject);

	res.status(200).json({ ...sidebarListObject });
}


/**
 * @desc    Returns a response to indicate the server is up
 * @route   GET /api/v1/info
 * @access  Public
 */
exports.ping = (req, res) => {
	res.status(200).json({ status: 'success', message: 'Server is up & running...' });
}


/**
 * @desc    Syncs the plugin each time a new event occurs (Possible events are a user joining or leaving a workspace for now)
 * @route   POST /api/v1/sync
 * @access  Private
 */
exports.sync = async (req, res) => {
	const queue = await axios.get(`${pluginInfoUrl}`);
	const userList = queue.data.queue;

	if (!userList.length) throw new BadRequestError('No queue to update');

	const queueId = userList[userList.length - 1].id;

	for (let i = 0; i < userList.length; i++) {
		const org_id = userList[i].message.organization_id;
		const rooms = await Rooms.fetchByFilter({ org_id });

		if (userList[i].event === 'enter_organization') {
			for (let roomIndex = 0; roomIndex < rooms.length; roomIndex++) {
				const { _id } = rooms[roomIndex];
				if (rooms[roomIndex].isDefault) {
					rooms[roomIndex].room_member_ids.push(userList[i].message.member_id);
					rooms[roomIndex]._id = undefined;

					rooms[roomIndex].room_modified_at = new Date();
					await Rooms.update(_id, rooms[roomIndex]);
				}
			}
		}

		if (userList[i].event === 'leave_organization') {
			for (let roomIndex = 0; roomIndex < rooms.length; roomIndex++) {
				const { _id } = rooms[roomIndex];
				rooms[roomIndex].room_member_ids = rooms[roomIndex].room_member_ids.filter((id) => id !== userList[i].message.member_id);
				rooms[roomIndex].room_modified_at = new Date();

				rooms[roomIndex]._id = undefined;

				await Rooms.update(_id, rooms[roomIndex]);
			}
		}
	}

	const data = await axios.patch(`${databaseSyncUrl}`, { id:queueId });

	res.status(200).send(appResponse('Synchronized successfully!', data, true));
}