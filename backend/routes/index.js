const fileRouter = require('./file.route');
const folderRouter = require('./folder.route');
const archiveRouter = require('./archive.route');
const roomsRouter = require('./rooms.route');
const pluginRouter = require('./plugin.router');

module.exports = router => {
  router.use('/', pluginRouter);
  router.use('/rooms', roomsRouter);
  router.use('/files', fileRouter);
  router.use('/folders', folderRouter);
  router.use('/archive', archiveRouter);

  return router;
}
