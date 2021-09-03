const fileRouter = require('./file.route');
const folderRouter = require('./folder.route');

module.exports = router => {
  router.use('/files', fileRouter);
  router.use('/folders', folderRouter);

  return router;
}
