'use strict'

var User = require('./user.query');
var jwt = require('jsonwebtoken');
var config = require('../../config/main.js');

// return all all the users information
exports.index = function(req, res, next){
  User.findAllUsers(function(err,users){
    if(err) res.json(401, 'something went wrong, please try again');
    res.json(200, users);
  });
};

// create a user account
exports.create = function(req, res, next){
  User.save(req.body, function(err, result){
    if(err) res.json(403, 'user already exists!');
    var token = jwt.sign({_id: result.insertId}, config.secrets.token, {expiresInMinutes: 60*5});
    res.json({token:token});
  });
};

// get profile of the user
exports.getProfile = function(req, res, next){};

// update user profile
exports.update = function(req, res, next){};

// changePassword
exports.changePassword = function(req, res, next){};