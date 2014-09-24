'use strict'

var mysql = require('mysql');
var config = require('../../config');
var bcrypt = require('')

var dbConnection = mysql.createConnection(config.dbConnectionString);

dbConnection.connect();

exports.findByEmail = function(email, callback){
  var queryString = 'SELECT * FROM users WHERE email = ?';
  dbConnection.query(queryString,[email], callback);
};

exports.findById = function(id, callback){
  var queryString = 'SELECT * FROM users WHERE user_id = ?';
  dbConnection.query(queryString, [id], callback);
};

//authentication function
exports.authenticate = function(){};

