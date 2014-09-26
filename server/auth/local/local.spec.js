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

var dbConnection = require('../../config/dbconnection');

describe('local auth test', function(){

  var testUserId1, testUserId2;

  var testUser1 = {
    user_name: "testuser1",
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
    User.save(testUser1, function(err, result){
      done();
    })
  });

  after(function(done){
    var queryString = 'DELETE FROM users WHERE user_name = ? or user_name = ?';
    dbConnection.query(queryString, [testUser1.user_name, testUser2.user_name], function(err, result){
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