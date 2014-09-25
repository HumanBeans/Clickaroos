'user strict'

var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');

module.exports = function(app){
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(passport.initialize());
}