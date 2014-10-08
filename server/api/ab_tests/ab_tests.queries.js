'use strict'

var connection = require('../../config/dbconnection').connection;
var bookshelf = require('../../config/dbconfig');
var ABTest = bookshelf.Model.extend({
  tableName: 'ab_tests'
});

var ABImg = bookshelf.Model.extend({
  tableName: 'ab_imgs'
});

var AB_Open_Time = bookshelf.Model.extend({
  tableName: 'ab_open_time'
});

var AB_Click_Time = bookshelf.Model.extend({
  tableName: 'ab_click_time'
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

            AB_Open_Time.forge({ab_test_id: abtest.attributes.id, '0_1': 0, '1_2': 0, '2_3': 0, '3_4': 0, '4_5': 0, '5_6': 0, '6_7': 0, '7_8': 0, '8_9': 0, '9_10': 0, '10_11': 0, '11_12': 0,'12_13': 0, '13_14': 0, '14_15': 0, '15_16': 0, '16_17': 0, '17_18': 0, '18_19': 0, '19_20': 0, '20_21': 0, '21_22': 0, '22_23': 0, '23_24': 0 }).save();
            AB_Click_Time.forge({ab_test_id: abtest.attributes.id, '0_1': 0, '1_2': 0, '2_3': 0, '3_4': 0, '4_5': 0, '5_6': 0, '6_7': 0, '7_8': 0, '8_9': 0, '9_10': 0, '10_11': 0, '11_12': 0,'12_13': 0, '13_14': 0, '14_15': 0, '15_16': 0, '16_17': 0, '17_18': 0, '18_19': 0, '19_20': 0, '20_21': 0, '21_22': 0, '22_23': 0, '23_24': 0}).save();
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