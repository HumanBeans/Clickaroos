'use strict'

var User = require('../../api/users/user.query');
var jwt = require('jsonwebtoken');
var config = require('../../config/main.js');
var chai = require('chai');
var should = chai.should();
var request = require('supertest');
var app = require('../../server');
var mysql = require('mysql');

// var dbConnection = mysql.createConnection(config.dbConnectionStringLocal);
// dbConnection.connect();

var dbConnection = require('../../config/dbconnection').connection;

describe('local auth test', function(){

  var testUserId1, testUserId2;

  var testUser1 = {
    username: "testuser1",
    email: "123@123.com",
    password: '123',
    phone: '999',
    credit_card: '123' 
  };

  var testUser2 = {
    username: 'testuser2',
    email: "234@234.com",
    password: '234',
    phone: '888',
    credit_card: '234'
  }

  before(function(done){
    User.save(testUser1, function(err, result){
      done();
    })
  });

  after(function(done){
    var queryString = 'DELETE FROM users WHERE username = ? or username = ?';
    dbConnection.query(queryString, [testUser1.username, testUser2.username], function(err, result){
      done();
    });
  });

  it('should be able to login with correct password', function(done){
    request(app)
      .post('/auth/')
      .send({email:testUser1.email, password:'123'})
      .expect(200)
      .end(function(err,res){
        res.body.should.have.property('token');
        done();
      });
  });

  it('should not be able to login with wrong password', function(done){
    request(app)
      .post('/auth/')
      .send({email:testUser1.email, password: 'whatever'})
      .expect(401)
      .end(function(err,res){
        res.body.should.not.have.property('token');
        done();
      })
  })
});