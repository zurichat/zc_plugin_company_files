const DatabaseOps = require('../utils/database.helper');
const File = new DatabaseOps('File');
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