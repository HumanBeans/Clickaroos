'use strict';

var express = require('express');

var controller = require('./ab_tests.controllers');
var auth = require('../../auth/auth.service');


var router = express.Router();

///////////////////////////////////////////////////////////////
// Request Handlers For api/test Route

// Add AB Test
router.post( '/', auth.isAuthenticated(), controller.handleNewABTest );

// TODO: Edit AB Test
// router.put( '/', controller.handleABTestEdit );

// TODO: Delete AB Test
// router.delete( '/', controller.handleDeleteABTest );

// D: The router below is for debugging purpses
router.get( '/', function( req, res ) {
  res.send( 'hit GET api/test route, indside ab_tests/main.js' ); 
});

module.exports = router;