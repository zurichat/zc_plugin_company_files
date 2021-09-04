const fs = require('fs');
const archiver = require('archiver');

  function generateZip ()  {

    const output = fs.createWriteStream(`${_dirname  }/file.zip`);
    const archive = archiver('zip', {
        zlib: {level: 9}
    });

    output.on('close', () => {
        console.log(`${archive.pointer()  }total bytes`);
        console.log('archiver has been finalized and the output descriptor has closed.');

    });


    archive.on('error', (err) => {
        throw err;
    })

    archive.pipe(output);

    archive.glob('file*.txt', {cwd:__dirname});

    archive.finalize();

}

module.exports = generateZip;
