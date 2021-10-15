const fileRouter = require('./file.route');
const folderRouter = require('./folder.route');
const archiveRouter = require('./archive.route');
const roomsRouter = require('./rooms.route');
const pluginRouter = require('./plugin.router');
const searchRouter = require('./search.route');
const activityRouter = require('./activity.route');
const slackRouter = require('./slack.route');


// Import Swagger for documentation
const swagger = require('swagger-ui-express');
const docs = require('../docs');

module.exports = router => {
  router.use('/', pluginRouter);
  router.use('/org', roomsRouter);
  router.use('/files', fileRouter);
  router.use('/folders', folderRouter);
  router.use('/archive', archiveRouter);
  router.use('/search', searchRouter);
  router.use('/activities', activityRouter)
  router.use('/docs', swagger.serve, swagger.setup(docs))
  router.use('/slack', slackRouter)

  return router;
}
