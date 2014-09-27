'use strict'

var passport = require('passport');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var compose = require('composable-middleware');
var config = require('../config/main.js');
var validateJwt = expressJwt({secret: config.secrets.token});
//planned to save the query to user helper functions in following file path
var User = require('../api/users/user.query');


//see if the user is authenticated, if it is, set req.user
exports.isAuthenticated = function(){
  return compose()
    .use(function(req, res, next){
      //allow the access_token be passed in the query string
      if(req.query && req.query.hasOwnProperty('access_token')){
        req.header.authorization = 'Bearer ' + req.query.access_token;
      }

      console.log('++++++++', req.header.authorization);

      validateJwt(req, res, next);
    })
    //attach user info into req, since validateJwt only attaches the user._id into req; and this two middleware needs to be seperated because the req.user._id could only be accessed after validateJwt() is called;

    //###########commented out for now, not necessarily have to attach user into every request
    // .use(function(req, res, next){
    //   //planned to have a User.findById function in user.model
    //   User.findById(req.user._id, function(err, user){
    //     if(err) return next(err);
    //     if(!user) return res.send(401);
    //     req.user = user;
    //     next();
    //   })
    // })
};

//
exports.hasRole = function(requiredRole){
  if(!requiredRole){ throw new Error('requiredRole is required'); }
  return compose()
    .use(exports.isAuthenticated())
    .use(function(req, res, next){
      if(req.user.role === requiredRole){
        next();
      }else{
        res.send(403);
      }     
    });
};

exports.signToken = function(id){
  return jwt.sign({_id: id}, config.secrets.token, {expireInMinutes: 60*5});
}
