'use strict';

var express = require('express');
var http = require('http');
var routes = require('./routes');
var configExpress = require('./config/express');
var connection = require('./config/dbconnection');

var app = express();

configExpress(app);
routes(app);

// TODO: Look into http.createServer, wth does it do?
// var server = http.createServer(app);

///////////////////////////////////////////////////
// DB Connection
connection.connect();

// populating seed data
require('./config/seed');

var port = process.env.PORT || 3000;
app.listen( port );

console.log('listening to port:', port)

exports = module.exports = app;
