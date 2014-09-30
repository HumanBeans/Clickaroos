'user strict'

var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var path = require('path')
var config = require('./main');

module.exports = function(app){
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(passport.initialize());

  // app.use(express.static(path.join(config.root, 'client')));

  app.use('/', express.static(config.root + '/wwwroot/client/splash'));
  app.use('/app', express.static(config.root + '/wwwroot/client'));

  // app.use(express.static(config.root + '/Clickaroos/client'));
  app.set('appPath', 'client');
}