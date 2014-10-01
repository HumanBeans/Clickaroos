'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var http = require('http');
var routes = require('./routes');
var configExpress = require('./config/express');
// var connection = require('./config/dbconnection').connection;
var connection = require('./config/main').dbConnectionString;
var bookshelf = require('./config/dbconfig');

// var knex = require('knex')({
//   client: 'mysql',
//   connection: connection
// });

// var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'users'
});

var Users = bookshelf.Collection.extend({
  model: User
});

// User.where({user_id:1}).fetch().then(function(user){
//   console.log('+++++++++', user.attributes);
// }).catch(function(err){
//   console.error(err);
// });

User.collection().fetch().then(function(users){
  console.log('+++++++++', users.models);
}).catch(function(err){
  console.error(err);
});

var app = express();

app.set('bookshelf', bookshelf);

configExpress(app);
routes(app);

// TODO: Look into http.createServer, wth does it do?
// var server = http.createServer(app);

///////////////////////////////////////////////////
// DB Connection
// connection.connect();

// populating seed data
// require('./config/seed');

var port = process.env.PORT || 3000;
app.listen( port );

console.log('listening to port:', port);

exports = module.exports = app;
