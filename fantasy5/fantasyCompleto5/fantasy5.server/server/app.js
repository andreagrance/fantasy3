/**
 * Main application file
 */

'use strict';

import express from 'express';
import sqldb from './sqldb';
import config from './config/environment';
import http from 'http';
import expressConfig from './config/express';
import registerRoutes from './routes';

if (config.seedDB){
  require('./config/seed');
}

// Setup server
var app = express();
var server = http.createServer(app);
//cross access
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
}
app.use(allowCrossDomain);
//some other code
expressConfig(app);
registerRoutes(app);

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

sqldb.sequelize.sync()
  .then(startServer)
  .catch(err => {
    console.log('Server failed to start due to error: %s', err);
  });

// Expose app
exports = module.exports = app;
