const DatabaseOps = require('../utils/database.helper');
const File = new DatabaseOps('File');
const Folder = new DatabaseOps('Folder');
const appResponse = require('../utils/appResponse');


exports.searchAndFilterFiles = async (req, res) => {
  // In this route, we will search files and filter them
  let { fileName, fileType } = req.query;

  if (fileName.trim()) {
    const data = await File.fetchAll();
    let response;

    if (fileType.trim()) {
      fileType = fileType.split(',');
      response = data.filter(({ fileName: name, type }) => {
        return new RegExp(String(fileName), 'i').test(name) && fileType.includes(type);
      });
    } else {
      response = data.filter(({ fileName: name }) => {
        return new RegExp(String(fileName), 'i').test(name);
      });
    }

    if (!response.length) {
      return res.status(404).send(appResponse('File not found!', null, true));
    }

    return res.status(200).send(appResponse('File results', response, true));
  } else {
    return res.status(400).send(appResponse('Invalid fileName provided!', null));
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