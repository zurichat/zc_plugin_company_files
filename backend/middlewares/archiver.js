const fs = require('fs');
const archiver = require('archiver');
const path = require('path');


  function generateZip ()  {
    
    
    const output = fs.createWriteStream(path.dirname(`${__filename}/zc.zip`));
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

    archive.glob('file*.txt', {cwd:'/archives' }, { prefix: 'zip' });


    archive.finalize();

}

module.exports = generateZip;
