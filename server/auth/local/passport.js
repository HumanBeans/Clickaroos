var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

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
      if(!User.authenticate(email, password)){
        return done(null, false, {message: 'This password is not correct.'});
      }

      return done(null, user);
    });
  })
}