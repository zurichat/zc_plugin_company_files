require('colors');
require('dotenv').config();
require('express-async-errors');

const path = require('path');
const cors = require('cors');
const cpus = require('os').cpus();
const cluster = require('cluster');
const express = require('express');
const compression = require('compression');
const cropFileUpload = require('express-fileupload');

const app = express();
const router = express.Router();

const pluginRouter = require('./backend/routes/plugin.router');
const rootRouter = require('./backend/routes/index')(router);
const isProduction = process.env.NODE_ENV === 'production';
const ErrorHandler = require('./backend/middlewares/errorHandler');

app.use(cors());

app.use(compression()); // Node.js compression middleware
app.use(express.json()); // For parsing application/json
app.use(cropFileUpload({ useTempFiles: true }));
app.use(express.urlencoded({ extended: false })); // For parsing application/x-www-form-urlencoded
app.use(cors({ origin: ['*'], methods: 'GET,PUT,PATCH,POST,DELETE', preflightContinue: false, optionsSuccessStatus: 204 }));

// To serve frontend build files
app.use(express.static(path.join(__dirname, 'frontend/dist')));
app.use(express.static(path.join(__dirname, 'root-config/dist')));

app.get('/zuri-zuri-plugin-company-files.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist/zuri-zuri-plugin-company-files.js'));
});

app.get('/zuri-root-config.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'root-config/dist/zuri-root-config.js'));
});

if (isProduction) {
  app.set('trust proxy', 1); // Trust first proxy
} else {
  app.use(require('morgan')('dev')); // Dev logging middleware
}

app.use('/', pluginRouter); // For... nvm
app.use('/api/v1', rootRouter); // For mounting the root router on the specified path

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  isProduction
    ? res.sendFile(path.join(__dirname, 'root-config/dist', 'index.html'))
    : res.sendFile(path.join(__dirname, 'root-config/dist', 'index-dev.html'))
});

// For handling server errors and all other errors that might occur
app.use(ErrorHandler);

if (cluster.isMaster) {
  // Fork workers
  cpus.forEach(() => cluster.fork());

  cluster.on('exit', () => cluster.fork());
} else {
  // Workers can share any TCP connection
  // In this case, it is an HTTP server
  const port = process.env.PORT || 5500;
  const server = app.listen(port, () => {
    console.log(':>>'.green.bold, 'Server running in'.yellow.bold, process.env.NODE_ENV.toUpperCase().blue.bold, 'mode, on port'.yellow.bold, `${port}`.blue.bold);
  });

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (error) => {
    // console.log(error);
    console.log(`✖ | Unhandled Rejection: ${error.message}`.red.bold);
    server.close(() => process.exit(1));
  });
}
