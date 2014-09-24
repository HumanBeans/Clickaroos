'use strict'

var chai = require('chai');
var should = chai.should();
var User = require('./user.query');
var mysql = require('mysql');
var config = require('../../config/main.js');

var dbConnection = mysql.createConnection(config.dbConnectionStringLocal);

dbConnection.connect(function(err){
  if(err) console.log(err);
  console.log('connected to local db');
});

describe('user test', function(){

  var testUserId;

  var testUser = {
    user_name: "testuser",
    email: "123@123.com",
    password: '123',
    phone: '123',
    credit_card: '123' 
  };
  
  before(function(done){
    var queryString = 'INSERT INTO users SET ?';
    dbConnection.query(queryString, [testUser], function(err,result){
      // console.log('++++++', arguments);
      testUserId = result.insertId;
      done();
    })
  });

  after(function(done){
    var queryString = 'DELETE FROM users WHERE user_id = ?';
    dbConnection.query(queryString, [testUserId], function(err, result){
      done();
    });
  })
  
  it('should have findByEmail, findById, findAllUsers and save method', function(done){
    User.should.have.property('findByEmail');
    User.should.have.property('findById');
    User.should.have.property('findAllUsers');
    User.should.have.property('save');
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
    User.save(testUser, function(err,result){
      console.log('++++++++', arguments);
      User.findById(result.insertId, function(err,user){
        user.user_name.should.equal(testUser.user_name);
      });
    });
  });

});