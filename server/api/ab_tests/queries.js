var connection = require('../../config/dbconnection');

exports.addABTest = function( res, data, callback ){
  // D: The bellow console.log is for debugging purposes
  console.log(data.abTestTitle, data.campaignId, data.startTime, data. timeAfterStart);
  connection.query( 
  // "insert into ab_tests( ab_test_title, campaign_id, start_time, time_after_start ) 
  // values ( 'Hard Coded', 1, '2014-11-27 11:00:00', '01:00:00' )",
    "INSERT INTO ab_tests( ab_test_title, campaign_id, start_time, time_after_start ) values ( '"
      + data.abTestTitle    + "' , " 
      + data.campaignId     + ", '" 
      + data.startTime      + "' , '" 
      + data.timeAfterStart + "' )",
      function( err ){
        if ( err ) throw error;
        callback( res, 'ab test added!!' );
      }  
  );
};