'use strict';
var addABTest = require('./ab_tests.queries').addABTest;


//////////////////////////////////////////////////////
// List of Helper Functions
var sendResponse = function( res, data, status ){
  status = status || 200;
  var stringifiedData = JSON.stringify( data );
  res.send( stringifiedData );
};

exports.handleNewABTest = function( req, res ) {
  console.log( 'inside handleNewABTest' );
  addABTest( res, req.body, sendResponse );
}