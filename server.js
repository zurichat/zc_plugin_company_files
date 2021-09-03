require('colors');
require('dotenv').config();
require('express-async-errors');

const path = require('path');
const cpus = require('os').cpus();
const cluster = require('cluster');
const express = require('express');
const compression = require('compression');
const fileUpload = require('express-fileupload');


const app = express();
const router = express.Router();

const isProduction = process.env.NODE_ENV === 'production';
const rootRouter = require('./backend/routes/index')(router);
const pluginInfoRouter = require('./backend/routes/plugin.router');
const ErrorHandler = require('./backend/middlewares/errorHandler');

const fileRouter = require('./backend/routes/file.route'); // File Read and Write route
const folderRouter = require('./backend/routes/folder.route'); // Folder Read and Write route

app.use(compression()); // Node.js compression middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: false })); // For parsing application/x-www-form-urlencoded
app.use(fileUpload({ createParentPath: true })); // For adding the 'req.files' property

app.use(express.static(path.resolve(__dirname, './frontend/build')));
if (isProduction) {
  app.set('trust proxy', 1); // Trust first proxy
} else {
  app.use(require('morgan')('dev')); // Dev logging middleware
}

app.use('/api/v1', rootRouter); // For mounting the root router on the specified path
app.use('/', pluginInfoRouter); // For mounting the plugin info router on the '/' path

// USING FILE AND FOLDER ROUTER
app.use(fileRouter);
app.use(folderRouter);

// All other GET requests not handled before will return our React app
app.use((req, res, next) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  res.sendFile(path.join(__dirname, './frontend/build', 'index.html'));
});


// For handling server errors and all other errors that might occur
app.use(ErrorHandler);

(async () => {
  // await connectToDatabase();

  if (cluster.isMaster) {
    // Fork workers
    cpus.forEach(() => cluster.fork());
    
    cluster.on('exit', () => cluster.fork());
  } else {
    // Workers can share any TCP connection
    // In this case, it is an HTTP server
    const port = process.env.PORT || 5500;
    const server = app.listen(port, () => {
      console.log(':>>'.green.bold, 'Server running in'.yellow.bold, (process.env.NODE_ENV || 'production').toUpperCase().blue.bold, 'mode, on port'.yellow.bold, `${port}`.blue.bold)
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', error => {
      // console.log(error);
      console.log(`✖ | Unhandled Rejection: ${error.message}`.red.bold);
      server.close(() => process.exit(1));
    })
  }
})().catch(error => {
  console.log(`✖ | Error: ${error.message}`.red.bold);
});
