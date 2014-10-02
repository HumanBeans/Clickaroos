'use strict'

var connection = require('../../config/dbconnection').connection;
var bookshelf = require('../../config/dbconfig');
var ABTest = bookshelf.Model.extend({
  tableName: 'ab_tests'
});

var ABImg = bookshelf.Model.extend({
  tableName: 'ab_imgs'
});
// // Required only for testing
// var mysql = require('mysql');
// var connection = require('../../config/dbconnection').testingConnection;
// connection.connect();

// find an abtest by Id
// exports.findABTestById = function( res, ABTestId, callback ){ 
//   connection.query('SELECT * FROM ab_tests WHERE ab_test_id = ?', [ABTestId], 
//     function( err, result ){
//       if( err ) throw err;
//       // console.log( 'result in findABTestById:', result ); 
//       callback( res, result )
//     }
//   );
// };

//refactor using bookshelf
exports.findABTestById = function( res, ABTestId, callback ){ 
  ABtest.where({ab_test_id: abTestId}).fetch()
    .then(function(ab_test){
      callback(undefined, ab_test);
    })
    .catch(function(err){
      callback(err);
    });
};

// exports.addABTest = function( res, data, callback ){
//   // TODO:  before inserting an AB test check if the test is already in the DB and return an error message
//   //          if duplicate
//   // D: The bellow console.log is for debugging purposes
//   console.log(data.abTestTitle, data.campaignId, data.startTime, data.millisecondsAfterStart, data.millisecondsPickWinner );
//   connection.query( 
//     "INSERT INTO ab_tests( ab_test_title, campaign_id, start_time, milliseconds_after_start, milliseconds_pick_winner ) VALUES ( ?, ?, ?, ?, ? )",
//     // "values ( 'Hard Coded', 1, '2014-11-27 11:00:00', '01:00:00' )",
//     [ data.abTestTitle, data.campaignId, data.startTime, data.millisecondsAfterStart, data.millisecondsPickWinner ],
//     function( err, result ){
//       if ( err ) throw err;
//       var abTestId = result.insertId;
//       console.log( 'abTestId:', abTestId );
      
//       data.imagesAndReroutes.forEach( function(obj) {
//         console.log( abTestId, obj.imageUrl, obj.rerouteUrl );
//         connection.query( 
//           "INSERT INTO ab_imgs( ab_test_id, clicks, views, asset_url, redirect_url ) VALUES ( ?, ?, ?, ?, ? )",
//           [ abTestId, 0, 0, obj.imageUrl, obj.rerouteUrl ],
//           function( err ){
//             if ( err ) throw err;
//             if( data.imagesAndReroutes.indexOf(obj) === data.imagesAndReroutes.length - 1 ) {
//               callback( res, { abTestId: abTestId, emailVar: '*|EMAIL|*' } );
//             }
//           }  
//         );
//       });
//     }  
//   );
// };

exports.addABTest = function( res, data, callback ){
  // TODO:  before inserting an AB test check if the test is already in the DB and return an error message
  //          if duplicate
  // D: The bellow console.log is for debugging purposes
  //data.imagesAndReroutes
  console.log(data.abTestTitle, data.campaignId, data.startTime, data.millisecondsAfterStart, data.millisecondsPickWinner );
  var abtestObj = {
    ab_test_title: data.abTestTitle,
    campaign_id: data.campaignId,
    start_time: data.startTime,
    milliseconds_after_start: data.millisecondsAfterStart,
    milliseconds_pick_winner: data.millisecondsPickWinner
  }

  ABTest.where({ab_test_title: data.abTestTitle}).fetch()
    .then(function(abtest){

      if(abtest){return callback(res, {error: 'abTest already exists!'});}

      ABTest.forge(abtestObj).save()
        .then(function(abtest){
          data.imagesAndReroutes.forEach(function(item){
            var imgObj = {
              ab_test_id: abtest.attributes.id,
              clicks: 0,
              views: 0,
              asset_url: item.imageUrl,
              redirect_url: item.rerouteUrl
            };
            ABImg.forge(imgObj).save();
          });
          callback( res, { abTestId: abtest.attributes.id, emailVar: '*|EMAIL|*' } )
        });
    })
};

// Delete an ab_test 
// exports.deleteABTest = function( res, ABTestId, callback ){ 
//   console.log( 'before deleteABTest id:', ABTestId );
//   connection.query( 'DELETE FROM ab_tests WHERE ab_test_id = ?', [ABTestId], 
//     function( err ) {
//       if( err ) throw err;
//       callback( res, 'ab test deleted!!' )
//     } 
//   )
// };


//refactor not sure if it is working
exports.deleteABTest = function( res, ABTestId, callback ){ 
  ABTest.where({ab_test_id: ABTestId}).destroy
    .then(function(result){
      callback(res, result);
    })
    .catch(function(err){
      callback(res, err);
    });
};


// Update an ab_test 
exports.updateABTest = function( res, data, callback ){ 
  return;
};