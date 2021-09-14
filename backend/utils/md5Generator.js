const fs = require('fs');
const crypto = require('crypto');
const { promisify } = require('util');
const fileRead = promisify(fs.readFile);

/**
 * Calculates the MD5 hash of a file.
 *
 * @param  {String} filePath - The absolute path to the file.
 * @return {String} - The MD5 hash.
 */
const md5Generator = async (filePath) => {
  const fileBuffer = await fileRead(filePath);

  return crypto.createHash('md5').update(fileBuffer).digest('hex');
}

module.exports = md5Generator;
