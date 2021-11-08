const RealTime = require('../utils/realtime.helper');
const DatabaseOps = require('../utils/database.helper');
const File = new DatabaseOps('File');
const { BadRequestError, NotFoundError } = require('../utils/appError');
const appResponse = require('../utils/appResponse');
const addActivity = require('../utils/activities');


// Retrieves all the files that has been archived by a user
exports.getArchivedFiles = async (req, res) => {
	const allFiles = await File.fetchAll();

	const data = allFiles.filter(file => file.isArchived);

	await RealTime.publish('archivedFiles', data);

	return data.length < 1
		? res.status(200).send(appResponse('No archived file!', [], true))
		: res.status(200).send(appResponse('Archived files', data, true));
}


// Archive a file
exports.archiveFile = async (req, res) => {
	const { userObj } = req.headers;
	const file = await File.fetchOne({ _id: req.params.fileId });
	if (!file) throw new NotFoundError('File not found!');

	if (file.isArchived === false) {
		const response = await File.update(req.params.fileId, { isArchived: true });
		await addActivity(userObj, 'archived', `${file.fileName}`);
		res.status(200).send(appResponse('File has been archived!', response, true));
	} else {
		throw new BadRequestError('File is already archived!');
	}
}