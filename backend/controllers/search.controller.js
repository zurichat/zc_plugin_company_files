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
      imageUrl: _.url ? _.url : null,
      createdAt: _.description,
      url: _.fileName ? `/companyfiles/previewFile/${_._id}` : `/companyfiles/folders/${_._id}`
    }
  })
}



const searchAndFilterFiles = async (req, res) => {
  const { fileName, fileType } = req.query;
  const {orgId, memberId} = req.params;

  if (fileName && fileName.trim()) {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    let response;

    if (fileType && fileType.trim()) {
      response = await File.fetchByFilter({
        orgId, createdBy: memberId,
        fileName: {
          '$regex': fileName, '$options': 'i' }, type: { '$in': fileType.split(',') }
      }, { skip: startIndex, limit });

      response_total = await File.fetchByFilter({
        orgId, createdBy: memberId, 
        fileName: { '$regex': fileName, '$options': 'i' }, type: { '$in': fileType.split(',') }
      });
    } else {
      response = await File.fetchByFilter({
        orgId, createdBy: memberId,
        fileName: { '$regex': fileName, '$options': 'i' }
      }, { skip: startIndex, limit });

      response_total = await File.fetchByFilter({
        orgId, createdBy: memberId,
        fileName: { '$regex': fileName, '$options': 'i' }
      });
    }

    // Pagination
    const total_count = response.length;
    const previous = 0 || page - 1;
    const last_page = ((response_total.length % limit) === 0) ? response_total.length/limit : Math.floor(response_total.length/limit) + 1
    const next =  (endIndex < total_count && limit <= total_count) ? page + 1 : last_page;

    return res.status(200).send(appResponse('File search result', undefined, true, {
      title: `files search results for query '${fileName}'`,
      description: `Showing search result for '${fileName}'`,
      pagination: {
        total_results: total_count,
        page_size: limit,
        current_page: page,
        first_page: 1,
        last_page,
        next: `https://companyfiles.zuri.chat/api/v1/search/?category=files&fileName=t&page=${next}`,
        previous: `https://companyfiles.zuri.chat/v1/search/?category=files&fileName=t&page=${previous}`,
      },
      search_parameters: {
        query: fileName, 
        filters: 'files',
        plugin: 'Company Files',
      },
      results: {
        entity: 'Files',
        data: formatSearchData(response)
        },
    }));
  } else {
    return res.status(400).send(appResponse('Invalid fileName provided!', null));
  }
}


const searchAndFilterFolders = async (req, res) => {
  const { orgId, memberId } = req.params;
  const { folderName, folderDate } = req.query;

  let response;

  if (folderName && folderName.trim()) {

    const page = parseInt(req.query.page, 10) || 1;
    const limit = 1;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    if (folderDate) {
      response = await Folder.fetchByFilter({
        orgId, 
        "collaborators.memberId": memberId,
        folderName: { '$regex': folderName, '$options': "i" },
        dateAdded:  { '$regex': folderDate},
      }, { skip: startIndex, limit });

      response_total = await Folder.fetchByFilter({
        orgId, 
        "collaborators.memberId": memberId,
        folderName: { '$regex': folderName, '$options': "i" },
        dateAdded:  { '$regex': folderDate},
      });
    } else {
      response = await Folder.fetchByFilter({
        orgId, 
        "collaborators.memberId": memberId,
        folderName: { '$regex': folderName, '$options': "i" },
      }, { skip: startIndex, limit });

      response_total = await Folder.fetchByFilter({
        orgId, 
        "collaborators.memberId": memberId,
        folderName: { '$regex': folderName, '$options': "i" },
      }); 
    }

    const total_count = response.length;
    const previous = 0 || page - 1;
    const last_page = ((response_total.length % limit) === 0) ? response_total.length/limit : Math.floor(response_total.length/limit) + 1
    const next =  (endIndex < total_count && limit <= total_count) ? page + 1 : last_page;

    if (total_count !== 0) {
      return res.status(200).send(
        appResponse("Folder search result", undefined, true, {
          title: `folder search results for query '${folderName}'`,
          description: `Showing search result for'${folderName}'`,
          pagination: {
            total_results: total_count,
            page_size: limit,
            current_page: page,
            first_page: 1,
            last_page,
            next: `https://companyfiles.zuri.chat/api/v1/search/?category=folders&folderName=t&page=${next}`,
            previous: `https://companyfiles.zuri.chat/v1/search/?category=folders&folderName=t&page=${previous}`,
          },
          search_parameters: {
            query: folderName, 
            filters: 'folders',
            plugin: 'Company Files',
          },
          results: {
            entity: 'Folders',
            data: formatSearchData(response)
            },
        })
      );
    } else {
      return res.status(200).send(
        appResponse("Folder search queries wrong", undefined, true, {
          title: `folder search results for query '${folderName}'`,
          description: `result of search for folders that contains the query '${folderName}'`,
          pagination: {
            total_results: total_count,
            page_size: limit,
            current_page: page,
            first_page: 1,
            last_page,
            next: `https://companyfiles.zuri.chat/api/v1/search/?category=folders&folderName=t&page=${next}`,
            previous: `https://companyfiles.zuri.chat/v1/search/?category=folders&folderName=t&page=${previous}`,
          },
          search_parameters: {
            query: folderName, 
            filters: 'folders',
            plugin: 'Company Files',
          },
          results: {
            entity: 'Folders',
            data: formatSearchData(response)
            },
        })
      );
    }
  } else {
    return res
      .status(400)
      .send(appResponse("Invalid folderName provided!", null));
  }
};


exports.searchFilesAndFolders = async (req, res) => {
  const { filter } = req.query;

  if (!filter) throw new BadRequestError('filters not provided! Valid filters are "files" & "folders"');

  switch (filter.toLowerCase()) {
    case 'files':
      searchAndFilterFiles(req, res);
      break;
    case 'folders':
      searchAndFilterFolders(req, res);
      break;
    default:
      throw new BadRequestError('Invalid filters! Valid filters are "files" & "folders"');
  }

}


exports.searchFileAndFolder = async (req, res) => {
  let { searchQuery } = req.query;
  const fileData = await File.fetchAll();
  const folderData = await Folder.fetchAll();
  

  if (searchQuery.trim()) {
    searchFile = fileData.filter(({ fileName: name }) => {
      return new RegExp(String(searchQuery), 'i').test(name);
    })
    searchFolder = folderData.filter(({ folderName: name }) => {
      return new RegExp(String(searchQuery), 'i').test(name);
    })

    const response = await Promise.all([searchFile,searchFolder]);

    if ((response[0].length <= 0) && (response[1].length <= 0)) {
      return res.status(404).send(appResponse('No such File/Folder!', null, true));
    }
    return res.status(200).send(appResponse('Search results for files and folders', response, true));
  } else {
    return res.status(400).send(appResponse('Invalid search entry!', null));
  }

}

exports.testSearch = async (req,res) => {
  res.sendFile(`${__dirname}/index.html`);
}


exports.searchSuggestion = async (req, res) => {
  const { orgId, memberId } = req.params 
  let suggestionObj = {};
  const response = await Folder.fetchByFilter({
    orgId, 
    "collaborators.memberId": memberId,
  });
  const responseFile = await File.fetchByFilter({
    orgId, 
    createdBy: memberId,
  });
  const fileResult = responseFile.map((suggest)=> suggest.fileName)

  const result = response.map((suggest)=> suggest.folderName)
  for (x of result){
    if(!suggestionObj.hasOwnProperty(x)){
        suggestionObj[x] = x 
    }
  }
  for (x of fileResult){
    if(!suggestionObj.hasOwnProperty(x)){
        suggestionObj[x] = x
    }
  }
  res.status(200).json({status:'OK',type: 'suggestions', data: suggestionObj})
}