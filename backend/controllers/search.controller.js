/* eslint-disable valid-jsdoc */
const DatabaseOps = require('../utils/database.helper');
const File = new DatabaseOps('File');
const Folder = new DatabaseOps('Folder');
const appResponse = require('../utils/appResponse');
const { BadRequestError } = require('../utils/appError');


const formatSearchData = data => {
	return data.map(_ => {
		return {
			id: _._id,
			title: _.fileName || _.folderName,
			description: _.type || _.description,
			image_url: _.url || null,
			created_at: _.description,
			url: _.fileName ? `/companyfiles/previewFile/${_._id}` : `/companyfiles/folders/${_._id}`
		}
	})
}


const searchFiles = async (req, res) => {
	const { fileName, fileType } = req.query;
	const { orgId, memberId } = req.params;

	if (fileName && fileName.trim()) {
		const page = parseInt(req.query.page, 10) || 1;
		const limit = parseInt(req.query.limit, 10) || 10;
		const startIndex = (page - 1) * limit;
		// const endIndex = page * limit;
    
		let response;
		let responseTotal;

		if (fileType && fileType.trim()) {
			[response, responseTotal] = await Promise.all([
				File.fetchByFilter({
					orgId, memberId,
					fileName: { '$regex': fileName, '$options': 'i' }, type: { '$in': fileType.split(',') }
					// $text : { $search : fileName }
				}, { skip: startIndex, limit }),
				File.fetchByFilter({
					orgId, memberId, 
					fileName: { '$regex': fileName, '$options': 'i' }, type: { '$in': fileType.split(',') }
				})
			])
		} else {
			[response, responseTotal] = await Promise.all([
				File.fetchByFilter({
					orgId, memberId,
					fileName: { '$regex': fileName, '$options': 'i' }
				}, { skip: startIndex, limit }),
				File.fetchByFilter({
					orgId, memberId,
					fileName: { '$regex': fileName, '$options': 'i' }
				})
			])
		}

		// Pagination
		const totalCount = responseTotal.length;
		const lastPage = (responseTotal.length % limit === 0) ? responseTotal.length / limit : Math.floor(responseTotal.length / limit) + 1;

		return res.status(200).send(appResponse('File search result(s)', undefined, true, {
			title: `Files search results for query '${fileName}'`,
			description: `Showing search results for '${fileName}'`,
			pagination: {
				total_results: totalCount,
				page_size: limit,
				current_page: page,
				first_page: 1,
				last_page: lastPage,
				next: (page === lastPage) ? `` : `https://companyfiles.zuri.chat/api/v1/search/${orgId}/${memberId}?filter=files&fileName=${fileName}&page=${page + 1}` ,
				previous: page > 1 ? `https://companyfiles.zuri.chat/v1/search/${orgId}/${memberId}?filter=files&fileName=${fileName}&page=${page}` : null
			},
			search_parameters: {
				query: fileName, 
				filters: 'files',
				plugin: 'Company Files'
			},
			results: {
				entity: 'Files',
				data: formatSearchData(response)
			}
		}));
	} else {
		return res.status(400).send(appResponse('Invalid fileName provided!', null));
	}
}


const searchFolders = async (req, res) => {
	const { orgId, memberId } = req.params;
	const { folderName, folderDate } = req.query;

	let response;
	let responseTotal;

	if (folderName && folderName.trim()) {
		const page = parseInt(req.query.page, 10) || 1;
		const limit = 1;
		const startIndex = (page - 1) * limit;
		// const endIndex = page * limit;

		if (folderDate && folderDate.trim()) {
			[response, responseTotal] = await Promise.all([
				Folder.fetchByFilter({
					orgId, 'collaborators.memberId': memberId,
					'folderName': { '$regex': folderName, '$options': 'i' },
					'dateAdded':  { '$regex': folderDate }
				}, { skip: startIndex, limit }),
				Folder.fetchByFilter({
					orgId, 'collaborators.memberId': memberId,
					'folderName': { '$regex': folderName, '$options': 'i' },
					'dateAdded':  { '$regex': folderDate }
				})
			]);
		} else {
			[response, responseTotal] = await Promise.all([
				Folder.fetchByFilter({
					orgId, 'collaborators.memberId': memberId,
					'folderName': { '$regex': folderName, '$options': 'i' }
				}, { skip: startIndex, limit }),
				Folder.fetchByFilter({
					orgId, 'collaborators.memberId': memberId,
					'folderName': { '$regex': folderName, '$options': 'i' }
				})
			]);
		}

		const totalCount = responseTotal.length;
		const lastPage = (responseTotal.length % limit === 0) ? responseTotal.length / limit : Math.floor(responseTotal.length / limit) + 1;

		return res.status(200).send(appResponse('Folder search result(s)', undefined, true, {
			title: `Folder search results for query '${folderName}'`,
			description: `Showing search results for '${folderName}'`,
			pagination: {
				total_results: totalCount,
				page_size: limit,
				current_page: page,
				first_page: 1,
				last_page: lastPage,
				next: (page === lastPage) ? `` : `https://companyfiles.zuri.chat/api/v1/search/${orgId}/${memberId}?filter=folders&folderName=${folderName}&page=${page + 1}` ,
				previous: page > 1 ? `https://companyfiles.zuri.chat/v1/search/${orgId}/${memberId}?filter=folders&folderName=${folderName}&page=${page}` : null
			},
			search_parameters: {
				query: folderName, 
				filters: 'folders',
				plugin: 'Company Files'
			},
			results: {
				entity: 'Folders',
				data: formatSearchData(response)
			}
		}));
	} else {
		return res.status(400).send(appResponse('Invalid folderName provided!', null));
	}
}


/**
 * @desc    Searches for files & folders in an organisation
 * @route   GET /api/v1/search/:orgId/:memberId
 * @access  Private
 */
exports.searchFilesAndFolders = async (req, res) => {
	const { filter } = req.query;

	if (!filter) throw new BadRequestError('Filter not provided! Valid filters are "files" & "folders"');

	switch (filter.toLowerCase()) {
	case 'files':
		searchFiles(req, res);
		break;
	case 'folders':
		searchFolders(req, res);
		break;
	default:
		throw new BadRequestError('Invalid filter! Valid filters are "files" & "folders"');
	}
}


/**
 * @desc    Returns suggestions for file & folder searches
 * @route   GET /api/v1/search-suggestions/:orgId/:memberId
 * @access  Private
 */
exports.searchSuggestion = async (req, res) => {
	const { orgId, memberId } = req.params 
	const suggestionObject = {};

	// const [fileResults, folderResults] = await Promise.all([
	const [responseFile, response] = await Promise.all([
		File.fetchByFilter({ orgId, memberId }),
		Folder.fetchByFilter({ orgId, memberId })
	])

	const fileResult = responseFile.map((suggest) => suggest.fileName);
	const result = response.map((suggest) => suggest.folderName);

	for (x of result) {
		if (!suggestionObject.hasOwnProperty(x)) {
			suggestionObject[x] = 'Folders' 
		}
	}

	for (x of fileResult) {
		if (!suggestionObject.hasOwnProperty(x)) {
			suggestionObject[x] = 'Files'
		}
	}

	res.status(200).json({ status:'ok', type: 'suggestions', data: suggestionObject });
}