'use strict'

var express = require('express');
var auth = require('../auth.service');
var passport = require('passport');

var router = express.Router();

router.post('/', function(req, res, next){
  passport.authenticate('local', function(err, user, info){
    var err = err || info;
    if(err) return res.json(401, error);
    if(!user) return res.json(404, 'something went wrong, try again');

    var token = auth.signToken(user.user_id);
    res.json({token:token});
  })(req, res, next);
});

module.exports = router;