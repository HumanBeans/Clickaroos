'use strict'

var chai = require('chai');
var should = chai.should();
var User = require('./user.query');
var mysql = require('mysql');
var config = require('../../config/main.js');
var dbConnection = require('../../config/dbconnection');

// var dbConnection = mysql.createConnection(config.dbConnectionStringLocal);

dbConnection.connect(function(err){
  if(err) console.log(err);
  console.log('connected to local db');
});

describe('user test', function(){

  var testUserId, testUserId2;

  var testUser = {
    user_name: "testuser",
    email: "123@123.com",
    password: '123',
    phone: '123',
    credit_card: '123' 
  };

  var testUser2 = {
    user_name: 'testuser2',
    email: "234@234.com",
    password: '234',
    phone: '234',
    credit_card: '234'
  }
  
  before(function(done){
    var queryString = 'INSERT INTO users SET ?';
    dbConnection.query(queryString, [testUser], function(err,result){
      // console.log('-------', result);
      testUserId = result.insertId;
      done();
    })
  });

  after(function(done){
    var queryString = 'DELETE FROM users WHERE user_id = ? or user_id = ?';
    dbConnection.query(queryString, [testUserId, testUserId2], function(err, result){
      done();
    });
  })
  
  it('should have findByEmail, findById, findAllUsers and save method', function(done){
    User.should.have.property('findByEmail');
    User.should.have.property('findById');
    User.should.have.property('findAllUsers');
    User.should.have.property('save');
    User.should.have.property('authenticate');
    done();
  });

  it('should find a user using findByEmail', function(done){
    User.findByEmail(testUser.email, function(err, user){
      // console.log('++++++++', user);
      user.user_name.should.equal(testUser.user_name);
      done();
    });
  });

  it('should find a user using findById', function(done){
    User.findById(testUserId, function(err, user){
      user.user_name.should.equal(testUser.user_name);
      done();
    });
  });

  it('should find all the users in the database', function(done){
    User.findAllUsers(function(err, users){
      users.length.should.equal(5);
      done();
    });
  });

  it('should be able to save a user', function(done){
    User.save(testUser2, function(err,result){
      testUserId2 = result.insertId;
      User.findById(result.insertId, function(err,user){
        user.user_name.should.equal(testUser2.user_name);
        done();
      });
    });
  });

  it('should be able to login with correct password', function(done){
    User.authenticate(testUser2.email, '234')
    .then(function(auth){
      // console.log('Data', user);
      auth.should.equal(true);
      done();
    });
  });

  it('should not be able to login with incorrect password', function(done){
    User.authenticate(testUser2.email, 'wrong password')
      .then(function(auth, user){
        auth.should.equal(false);
        done();
      });
  });

});