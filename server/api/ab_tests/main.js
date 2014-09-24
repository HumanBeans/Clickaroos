'use strict';

var express = require('express');
// var controller = require('./ab_tests.controller');

var router = express.Router();

///////////////////////////////////////////////////////////////
// Request Handlers For api/test Route
router.all( '/', function( req, res ) {
  res.send( 'hit api/test route, indside ab_tests/main.js' ); 
} );

module.exports = router;