const fileRouter = require('./file.route');
const folderRouter = require('./folder.route');
const archivedRouter = require('./archived.route');
const roomsRouter = require('./rooms.route');
const pluginRouter = require('./plugin.router');
const searchRouter = require('./search.route');
const activityRouter = require('./activity.route')
const securityRouter = require('./security.route')
const slackRouter = require('./slack.route');


// Import Swagger for documentation
const swagger = require('swagger-ui-express');
const docs = require('../docs');

module.exports = router => {
  router.use('/', pluginRouter);
  router.use('/org', roomsRouter);
  router.use('/files', fileRouter);
  router.use('/folders', folderRouter);
  router.use('/archived', archivedRouter);
  router.use('/', searchRouter);
  router.use('/activities', activityRouter)
  router.use('/security', securityRouter)
  router.use('/docs', swagger.serve, swagger.setup(docs))
  router.use('/slack', slackRouter)

  return router;
}
