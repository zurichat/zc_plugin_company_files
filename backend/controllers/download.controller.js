const DatabaseConnection = require('../utils/database.helper');
const File = new DatabaseConnection('File');
const { BadRequestError, InternalServerError, NotFoundError } = require('../utils/appError');
const archiver = require('archiver');
const axios = require('axios');
const fs = require('fs');
const fsAsync = require('fs/promises');

exports.downloadFolder = async (req, res) => {
    let params = req.params,
        folderId = params.folderId;

    if (folderId === "" || folderId === undefined) throw new BadRequestError('Missing "folder id" parameter');

    res.set({
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="folder_${folderId}.zip"`
    })


    const data = await File.fetchAll({ folderId: folderId });
    if (!data) throw new NotFoundError();

    const matchingFolderId = data.filter(file => file.folderId === folderId);

    //remove dir if exists
    try {
        await fsAsync.rmdir(`output/folder_${folderId}`);
    } catch (error) {

    }
    await fsAsync.mkdir(`output/folder_${folderId}`);

    for (let i = 0; i < matchingFolderId.length; i++) {
        axios({
            method: 'get',
            url: 'https://res.cloudinary.com/companyfiles/image/upload/v1632939634/ceojpikjw2itl4my6uo0.png',
            responseType: 'stream'
        })
            .then(function (response) {
                response.data.pipe(fs.createWriteStream(`output/folder_${folderId}/${matchingFolderId.fileName}`))
            });
    }

    const archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });

    archive.on('error', function (err) {
        throw err;
    });

    archive.on('warning', function (err) {
        if (err.code === 'ENOENT') {
            // log warning
        } else {
            // throw error
            throw err;
        }
    });

    // pipe archive data to the file
    archive.pipe(res);

    // append files from a sub-directory, putting its contents at the root of archive
    archive.directory(`output/folder_${folderId}`, false);



    // finalize the archive (ie we are done appending files but streams have to finish yet)
    // 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
    archive.finalize();

    //remove generated dir
    await fsAsync.rmdir(`output/folder_${folderId}`);
}