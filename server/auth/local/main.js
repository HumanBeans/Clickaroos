'use strict'

var express = require('express');
var auth = require('../auth.service');
var passport = require('passport');
var User = require('../../api/users/user.query');

var router = express.Router();

//#####The passport local auth does not work correctly yet, come back to that later

// router.post('/', function(req, res, next){
//   console.log('+++++', req.body);
//   passport.authenticate('local', function(err, user, info){
//     console.log("***********");
//     if (err) { return next(err); }
//     if (!user) { return res.redirect('/auth'); }

//     var token = auth.signToken(user.user_id);
//     res.json({token:token});
//   })(req, res, next);
// });

router.post('/', function(req, res, next){
  if(!req.body.email){
    req.body.email = req.body.username;
    delete req.body.username;
  }
  User.authenticate(req.body.email, req.body.password)
    .then(function(authenticated){
      // console.log('******', authenticated);
      if(!authenticated){ 
        return res.status(401).json('incorrect password or invalid username');
      }
      User.findByEmail(req.body.email, function(err, user){
        var token = auth.signToken(user.user_id);
        res.json({token:token});
      });
    });
});

module.exports = router;