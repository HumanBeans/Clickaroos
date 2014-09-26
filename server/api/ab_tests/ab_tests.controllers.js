'use strict';
var addABTest = require('./queries').addABTest;


//////////////////////////////////////////////////////
// List of Helper Functions
var sendResponse = function( res, data, status ){
  status = status || 200;
  var stringifiedData = JSON.stringify( data );
  res.send( stringifiedData );
};

var parsePost = function(req, callback) {
  var data = "";
  req.on("data", function(chunk) {
    data += chunk;
  });
  req.on("end", function() {
    // if (data) { callback(JSON.parse(data)); }

    // TODO: Switch back to top line once client is connected to server
    if (data) callback( eval("("+data+")") );
    else callback();
  });
};

exports.handleNewABTest = function( req, res ) {
  parsePost( req, function(data){
    console.log( 'console in parsePost callback' , typeof data );
    addABTest( res, data, sendResponse );
  });
}