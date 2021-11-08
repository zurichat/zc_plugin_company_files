/* eslint-disable */
const path = require('path');
const { readFile, writeFile } = require('fs/promises');

(async () => {
  const distFile = await readFile(path.join(__dirname, 'dist', 'index.html'), { encoding: 'utf-8' });

  await writeFile(
    path.join(__dirname, 'dist', 'index-dev.html'),
    distFile.replace(/https:\/\/companyfiles.zuri.chat\//g, 'http://127.0.0.1:22666/')
  );
})();
