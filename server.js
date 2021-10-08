require('colors');
require('dotenv').config();
require('express-async-errors');

const path = require('path');
const cors = require('cors');
const cpus = require('os').cpus();
const cluster = require('cluster');
const express = require('express');
const crontab = require('node-crontab');
const compression = require('compression');
const cropFileUpload = require('express-fileupload');
let MemoryCache;
let cacheClient;

const app = express();
const router = express.Router();


const pluginRouter = require('./backend/routes/plugin.router');
const rootRouter = require('./backend/routes/index')(router);
const isProduction = process.env.NODE_ENV === 'production';
const ErrorHandler = require('./backend/middlewares/errorHandler');
const { NotFoundError } = require('./backend/utils/appError');
const emptyTrash = require('./backend/scripts/emptyTrash');


app.use(cors());
app.use(compression()); // Node.js compression middleware
app.use(express.json()); // For parsing application/json
app.use('/api/v1/files/crop', cropFileUpload({ useTempFiles: true }));
app.use(express.urlencoded({ extended: false })); // For parsing application/x-www-form-urlencoded


// Schedule 2-hourly trash emptying
// (i.e., the emptyTrash() script will run every 2 hours)
crontab.scheduleJob('0 1,3,5,7,9,11,13,15,17,19,21,23 * * *', emptyTrash, [30]);

app.use((req, res, next) => {
  if (!isProduction) {
    MemoryCache = require('@outofsync/memory-cache');
    cacheClient = new MemoryCache({ bypassUnsupported: true });
    req.MemoryCache = cacheClient.createClient();
  }

  const allowedOrigins = ['https://zuri.chat', 'https://www.zuri.chat', 'https://companyfiles.zuri.chat', 'http://localhost:9000', 'http://localhost:5500'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin); // restrict it to the required domain
  }
  next();
});


if (isProduction) {
  app.set('trust proxy', 1); // Trust first proxy
} else {
  app.use(require('morgan')('dev')); // Dev logging middleware
}


// To serve frontend build files
app.use(express.static(path.join(__dirname, 'frontend/dist')));
app.use(express.static(path.join(__dirname, 'root-config/dist')));

app.get('/zuri-zuri-plugin-company-files.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist/zuri-zuri-plugin-company-files.js'));
});

app.get('/zuri-root-config.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'root-config/dist/zuri-root-config.js'));
});


app.use('/', pluginRouter); // For... nvm
app.use('/api/v1', rootRouter); // For mounting the root router on the specified path

// Handle resource not found error on backend
app.use('/api/*', (req,res,next) => {
  next(new NotFoundError);
})

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

module.exports = app;
