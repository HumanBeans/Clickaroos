var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../api/users/user.query');

exports.setup = function(User){
  passport.use(new LocalStrategy{
    usernameField: 'email',
    passwordField: 'password'
  }, function(email, password, done){
    //need findByEmail method in database model
    User.findByEmail(email, function(err,user){
      if (err) return done(err);

      if(!user) {
        return done(null, false, {message: 'Incorrect email address'});
      }

      // need authenticate method in User DB model
      User.authenticate(email, password)
        .then(function(auth){
          if(!auth){
            return done(null, false, {message: 'Incorrect password'});
          }
          return done(null, user);
        });
      // if(!User.authenticate(email, password)){
      //   return done(null, false, {message: 'This password is not correct.'});
      // }

      // return done(null, user);
    });
  })
}