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
    if(err) {
      console.log(err);
      return res.status(403).json('user alread exists');
    }
    var token = jwt.sign({_id: result.insertId}, config.secrets.token, {expiresInMinutes: 60*5});
    res.status(200).json({token:token});
  });
};

// get profile of the user
exports.getProfile = function(req, res, next){
  // res.json('hello');

  //##### To be worked on later
  User.getProfile(req.user._id, function(err, userProfile){
    res.json(userProfile);
  });
};

// update user profile
exports.update = function(req, res, next){};

// changePassword
exports.changePassword = function(req, res, next){};
