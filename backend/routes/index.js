const fileRouter = require('./file.route');
const folderRouter = require('./folder.route');
const uuid = require('uuid');

module.exports = router => {
  router.use('/files', fileRouter);
  router.use('/folders', folderRouter);

  return router;
}
