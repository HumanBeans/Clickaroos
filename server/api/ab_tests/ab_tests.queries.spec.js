'use strict'

var mysql = require('mysql');
var chai = require('chai');
var should = chai.should();
var ABTestsQueries = require('./ab_tests.queries');

var connection = require('../../config/dbconnection.js').testingConnection;

connection.connect(function(err){
  if(err) console.log(err);
  console.log('connected to local db');
});

describe('ab_tests test', function(){

  var ab_test1ID, ab_test2ID, ab_test3ID, ab_test4ID;

  var ab_test1 = {
    ab_test_title: 'ab_test1',
    campaign_id: 1,
    start_time: '2014-11-27 11:00:00',
    time_after_start: '01:00:00'
  };

  var ab_test2 = {
    ab_test_title: 'ab_test2',
    campaign_id: 11,
    start_time: '2014-11-27 11:00:00',
    time_after_start: '01:00:00'
  };

  var ab_test3 = { 
    abTestTitle: 'ab_test3', 
    campaignId: 1, 
    startTime: '2014-11-27 11:00:00', 
    timeAfterStart: '01:00:00' };

  var ab_test4 = { 
    abTestTitle: 'ab_test4', 
    campaignId: 1, 
    startTime: '2014-11-27 11:00:00', 
    timeAfterStart: '01:00:00' };
  
  before( function(done) {
    var queryString1 = 'INSERT INTO ab_tests SET ?';
    connection.query(queryString1, [ab_test1], function(err, result){
      console.log('-------', err);
      ab_test1ID = result.insertId;
      done();
    });
  });

  // before( function(done) {
  //   var queryString2 = ' SELECT * FROM ab_tests WHERE ab_test_title = ? ' 
  //   connection.query(queryString2, [ab_test1.ab_test_title], function(err, result){
  //     // console.log('-------', err);
  //     console.log('-------', result);
  //     done();
  //   });
  // });

  after(function(done){
    var queryString = 'DELETE FROM ab_tests WHERE ab_test_id = ? or ab_test_id = ?';
    connection.query(queryString, [ab_test1ID, ab_test4ID], function(err, result){
      done();
    });
  });
  
  xit('should have addABTest, deleteABTest, updateABTest and findABTestById', function(done){
    ABTestsQueries.should.have.property('addABTest');
    ABTestsQueries.should.have.property('deleteABTest');
    ABTestsQueries.should.have.property('updateABTest');
    ABTestsQueries.should.have.property('findABTestById');
    done();
  });

  xit('should find a ab_test using findABTestById', function(done){
    ABTestsQueries.findABTestById( [], ab_test1ID, function( res, result ){
      // console.log( 'the result:', result );
      result[0].ab_test_id.should.equal( ab_test1ID );
      done();
    });
  });

  xit('should add an ab_test using addABTest', function(done){
    ABTestsQueries.addABTest( [], ab_test4, function( res, message ){
      connection.query('SELECT * FROM ab_tests WHERE ab_test_title = ?', [ab_test4.abTestTitle], 
        function( err, result ){
          result[0].ab_test_title.should.equal( ab_test4.abTestTitle );
          ab_test4ID = result[0].ab_test_id;
          done();
        });
    });
  });

  it('should delete an ab_test from the database', function(done){
    var ab_testID;
    ABTestsQueries.addABTest( [], ab_test3, function( res, message ){ 
      connection.query('SELECT * FROM ab_tests WHERE ab_test_title = ?', [ab_test3.abTestTitle], 
        function( err, result ){
          ab_testID = result[0].ab_test_id;
          ABTestsQueries.deleteABTest( [], ab_testID, function(err, message){
            ABTestsQueries.findABTestById( [], ab_testID, function( err, result ){
              result.length.should.equal( 0 );
              done();
            });
          });
        });
    });
  });

});