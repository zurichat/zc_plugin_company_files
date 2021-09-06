const ApiConnection = require('../utils/database.helper');
const File = new ApiConnection('File');
// const FileSchema = require('../models/File');

exports.fileCreate = async (req, res) => {
  const { body } = req;

  // const file = await FileSchema.validateAsync(body);
  const response = await File.create(body);

  res.send({ response });
};

exports.getAllFiles = async (req, res) => {
  const response = await File.fetchAll();

  res.send({ response });
};

exports.fileDetails = async (req, res) => {
  const response = await File.fetchOne(req.params.id);

  res.send({ response });
};

exports.fileUpdate = async (req, res) => {};

exports.fileDelete = async (req, res) => {};

exports.searchFileByIsDeleted = async (req, res) => {
  try {
    const isDeleted = true;
    const response = await File.fetchAll();

    const deletedFiles = response.data.filter((file) => {
      return file.isDeleted === isDeleted;
    });

    console.log(deletedFiles);
    res.status(200).send({ deletedFiles });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

// handle file searching by is starred is true
exports.searchStarredFiles = async (req, res) => {
  try {
    const { data } = await File.fetchAll();
    // loop through response object and check if isStarred is true
    const starredFiles = [];
    data.map((data) => {
      return data.isStarred ? starredFiles.push(data) : null;
    });
    return res.status(200).json({
      response: { status: 200, message: 'success', data: starredFiles },
    });
  } catch (error) {
    return res.send({ error });
  }
};

exports.searchByDate = async (req, res) => {
  try {
    const { data } = await File.fetchAll();
    const { pickDate } = req.query;

    // date format yyyy-m-d
    if (pickDate) {
      const rd = data.filter((d) => {
        if (d.createdAt === pickDate) {
          return true;
        } else return false;
      });
      rd.length === 0
        ? res.status(404).json(`no files found on ${pickDate}`)
        : res.status(200).json(rd);
      console.log(rd);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Retrieves all the files that has been archived by a user
exports.getArchivedFiles = async (req, res) => {
  try {
    const allFiles = await File.fetchAll();

    //   Validate Response Status
    if (allFiles.status === 200) {
      const archives = [];
      allFiles.data.map((file) => {
        return file.isArchived ? archives.push(file) : null;
      });
      return res
        .status(200)
        .json({ status: 200, message: 'success', archives });
    }
  } catch (error) {
    return error;
  }
};

// empty recycle bin
exports.emptyRecycleBin = async (req, res) => {
  try {
    const { data } = await File.fetchAll();
    const getIsDeletedFiles = data.filter(({ isDeleted }) => isDeleted === 'true');
    return res.status(200).json({
      response: {
        status: 200,
        message: 'Recycle Bin Empty',
        data: getIsDeletedFiles,
      },
    });
  } catch (error) {
    res.send({ error });
  }
};

// get sall deleted files
exports.getAllDeletedFiles = async (req, res) => {
  try {
    const response = await File.fetchAll();
    const responseData = response.data;
    const resposneArray = [];
    for (const iterator of responseData) {
      if (!iterator.isDeleted) {
        continue;
      }
      resposneArray.push(iterator);
    }
    if (!resposneArray.length) {
      res.status(404).send('no data found');
      return;
    }
    res.send(resposneArray);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    console.log(error)
    res.status(500).send(error)
  }
}


// check for duplicate files with md5 values
exports.isDuplicate = async (req, res) => {
  try {
    const { md5Hash } = req.body;
    const { data } = await API.fetchAll();
    let fileExists = false;
    // loop through response object and check if md5Hash value exist
    data.forEach(fileObject => {
      if (fileObject.md5Hash === md5Hash) fileExists = true;
    });
    if (fileExists) {
      return res
        .status(200)
        .json({ status: 200, message: "This is a duplicate file", duplicate: fileExists, });
    } else {
      return res
        .status(200)
        .json({ status: 200, message: "This is a new file", duplicate: fileExists, });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

// get all duplicate files
exports.getAllDuplicates = async (req, res) => {
  try {
    const { data } = await API.fetchAll();
    const duplicateFiles = [];
    const duplicateHash = [];
    // loop through response object and check if md5Hash value exist
    data.forEach(fileObject => {
      if (!duplicateHash.includes(fileObject.md5Hash)) {
        duplicateHash.push(fileObject.md5Hash);
      } else {
        duplicateFiles.push(fileObject);
      }
    });
    return res
      .status(200)
      .json({
        status: 200,
        message: `${duplicateHash.length} ${(duplicateHash.length > 1) ? ' Files' : ' File'} has duplicates`,
        duplicate: deletedFiles,
      });
  } catch (error) {
    res.status(500).json(error);
  }
}


// set edit permission
exports.setEditPermission = async (req, res) => {
  try{
    const files = await File.fetchAll()
    const fileData = files.data
    const { admin } = req.params;
    if( admin == 'true'){
      res.send(fileData.map((files) => {
        return files.permission = 'edit'
      }))
    }else{
      res.send(fileData.map((files) => {
        return files.permission = 'view'
      }))
    }
  } catch (error){
    res.status(500).send(error)
  }
};
