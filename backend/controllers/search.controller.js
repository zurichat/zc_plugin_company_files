const DatabaseOps = require('../utils/database.helper');
const File = new DatabaseOps('File');
const Folder = new DatabaseOps('Folder');
const appResponse = require('../utils/appResponse');
const { BadRequestError } = require('../utils/appError');


const searchAndFilterFiles = async (req, res) => {
  const { fileName, fileType } = req.query;

  if (fileName && fileName.trim()) {
    let response;

    if (fileType && fileType.trim()) {
      response = await File.fetchByFilter({
        fileName: { '$regex': fileName, '$options': 'i' }, type: { '$in': fileType.split(',') }
      });
    } else {
      response = await File.fetchByFilter({ fileName: { '$regex': fileName, '$options': 'i' } });
    }

    if (!response.length) {
      return res.status(404).send(appResponse('File not found!', null, true));
    }

    return res.status(200).send(appResponse('File results', response, true));
  } else {
    return res.status(400).send(appResponse('Invalid fileName provided!', null));
  }
}


exports.searchFilesAndFolders = async (req, res) => {
  const { category } = req.query;

  if (!category) throw new BadRequestError('Category not provided! Valid categories are "files" & "folders"');

  switch (category.toLowerCase()) {
    case 'files':
      searchAndFilterFiles(req, res);
      break;
    // case 'folders':
    //   searchAndFilterFolders(req, res);
    //   break;
    default:
      throw new BadRequestError('Invalid category! Valid categories are "files" & "folders"');
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