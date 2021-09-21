const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

(async () => {
  const distFile = await readFile(path.join(__dirname, 'dist', 'index.html'), { encoding: 'utf-8' });

  await writeFile(path.join(__dirname, 'dist', 'index-dev.html'), distFile.replace(/https:\/\/companyfiles.zuri.chat\//g, 'http://127.0.0.1:5500/'));
})();
