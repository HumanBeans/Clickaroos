'use strict'

var dbConnection = require('../../config/dbconnection');
var mysql = require('mysql');
var config = require('../../config/main.js');
var bcrypt = require('bcrypt-nodejs');
var Q = require('q');

// var dbConnection = mysql.createConnection(config.dbConnectionString);
// var dbConnection = mysql.createConnection(config.dbConnectionStringLocal);
// dbConnection.connect();

exports.findByEmail = function(email, callback){
  var queryString = 'SELECT * FROM users WHERE email = ?';
  dbConnection.query(queryString,[email], function(err,user){
    callback(err, user[0]);
  });
};

exports.findById = function(id, callback){
  var queryString = 'SELECT * FROM users WHERE user_id = ?';
  dbConnection.query(queryString, [id], function(err, user){
    callback(err, user[0]);
  });
};

exports.findAllUsers = function(callback){
  var queryString = 'SELECT * FROM users';
  dbConnection.query(queryString, callback);
};

exports.getProfile = function(id, callback){
  var queryString = 'SELECT * FROM users WHERE user_id = ?';
  dbConnection.query(queryString, [id], function(err, user){
    // console.log('******', user[0]);
    delete user[0].password;
    callback(err, user[0]);
  })
}

exports.save = function(userObj, callback){
  var password = userObj.password;
  var queryString = 'INSERT INTO users SET ?';

  exports.findByEmail(userObj.email, function(err, user){
    if(user) {callback(user);}
    else{
      bcrypt.genSalt(10, function(err,salt){
        bcrypt.hash(password, salt, null, function(err,hash){
          userObj.password = hash;
          console.log('hereeeeee  ',userObj);
          dbConnection.query(queryString, [userObj], callback);
        });
      });
    }
  });
};

//authentication function
//use the synchronous version of compare function for now, to be refactored later
exports.authenticate = function(email, password){
  var deferred = Q.defer();
  exports.findByEmail(email,function(err,user){
    bcrypt.compare(password, user.password, function(err, res){
      if(err){
        deferred.reject(new Error(err));
      }else{
        deferred.resolve(res,user);
      }
    });
  });
  return deferred.promise;
};
