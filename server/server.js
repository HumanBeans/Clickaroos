'use strict';

var express = require('express');
var http = require('http');
var mysql = require('mysql');
var routes = require('./routes');
var configExpress = require('./config/express');
var app = express();

configExpress(app);
routes(app);

// TODO: Look into http.createServer, wth does it do?
// var server = http.createServer(app);

///////////////////////////////////////////////////
// DB Connection
var connection = mysql.createConnection({
	host: 'us-cdbr-azure-west-a.cloudapp.net',
	user: 'b017f8a5a6d3e8',
	password: '46c0073d',
	database: 'ClickagoosDB'
});
connection.connect();


var port = process.env.PORT || 3000;
app.listen( port );

console.log('listening to port:', port)

exports = module.exports = app;
