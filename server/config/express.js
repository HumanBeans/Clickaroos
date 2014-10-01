'user strict'

var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var path = require('path')
var config = require('./main');

module.exports = function(app){
  var env = app.get('env');

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(passport.initialize());

  // app.use(express.static(path.join(config.root, 'client')));

  if(env === 'production'){
    app.use('/', express.static(config.root + '/wwwroot/client/splash'));
    app.use('/app', express.static(config.root + '/wwwroot/client'));
    app.use(express.static(config.root + '/wwwroot/client'));
  }

  if(env === 'development'){
    app.use('/', express.static(config.root + '/Clickaroos/client/splash'));
    app.use('/app', express.static(config.root + '/Clickaroos/client'));    
    app.use(express.static(config.root + '/Clickaroos/client'));
  }


  app.set('appPath', 'client');
}