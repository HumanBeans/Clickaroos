'use strict'

var mysql = require('mysql');
var chai = require('chai');
var should = chai.should();
var User = require('./ab_tests.queries');

// var connection = require('../../config/main.js').connection;

var connection = mysql.createConnection({
  host: 'clickaroosdb.cloudapp.net',
  user: 'Clickaroos',
  password: 'HumanBeans',
  database: 'clickaroosTest'
});

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
      // console.log('-------', result);
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
  
  it('should have addABTest, deleteABTest, updateABTest and findABTestById', function(done){
    User.should.have.property('addABTest');
    User.should.have.property('deleteABTest');
    User.should.have.property('updateABTest');
    User.should.have.property('findABTestById');
    done();
  });

  it('should find a user using findABTestById', function(done){
    User.findABTestById( [], ab_test1ID, function( res, result ){
      // console.log( 'the result:', result );
      result[0].ab_test_id.should.equal( ab_test1ID );
      done();
    });
  });

  it('should add an ab_test using addABTest', function(done){
    User.addABTest( [], ab_test4, function( res, message ){
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
    User.addABTest( [], ab_test3, function( res, message ){ 
      connection.query('SELECT * FROM ab_tests WHERE ab_test_title = ?', [ab_test3.abTestTitle], 
        function( err, result ){
          ab_testID = result[0].ab_test_id;
          User.deleteABTest( [], ab_testID, function(err, message){
            User.findABTestById( [], ab_testID, function( err, result ){
              result.length.should.equal( 0 );
              done();
            });
          });
        });
    });
  });

  // it('should not be able to login with incorrect password', function(done){
  //   User.authenticate(testUser2.email, 'wrong password')
  //     .then(function(auth, user){
  //       auth.should.equal(false);
  //       done();
  //     });
  // });

});