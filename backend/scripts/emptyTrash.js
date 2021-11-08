const DatabaseOps = require('../utils/database.helper');
const File = new DatabaseOps('File');

const differenceInDays = (firstDate, nextDate) => {
  const first = new Date(firstDate);
  const next = new Date(nextDate);
  const timeDifference = Math.abs(first - next);
  
  return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}

const emptyTrash = async (FILE_DURATION = 30) => {
  console.log(':>> Cron Job [Empty Trash] is about running...');
  const allFiles = await File.fetchAll();
  const filesToDelete = allFiles.filter(file => {
    return file.isDeleted && differenceInDays(file.lastAccessed, Date.now()) >= FILE_DURATION;
  // eslint-disable-next-line array-callback-return
  }).map(({ _id, cloudinaryId }) => {
 _id, cloudinaryId 
});


  const [response] = await Promise.all([
    File.delete(filesToDelete.map(({ _id }) => _id)),
    filesToDelete.map(({ cloudinaryId }) => {
      return MediaUpload.deleteFromCloudinary(cloudinaryId);
    })
  ]);

  if (response) {
    console.log(':>> CronJob [Empty Trash]');
    console.log(`${filesToDelete.length} files deleted successfully!`);
  }
}


module.exports = emptyTrash;
