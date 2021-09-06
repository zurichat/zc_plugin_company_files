const fileRouter = require('./file.route');
const folderRouter = require('./folder.route');
const uuid = require('uuid');
const archiveRouter = require('./archive.route');

module.exports = router => {
  router.use('/file', fileRouter);
  router.use('/folder', folderRouter);
  router.use('/archive', archiveRouter);

  return router;
}
