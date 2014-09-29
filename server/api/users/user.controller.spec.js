'use strict'

var User = require('./user.query');
var jwt = require('jsonwebtoken');
var config = require('../../config/main.js');
var chai = require('chai');
var should = chai.should();
var request = require('supertest');
var app = require('../../server');
var mysql = require('mysql');
var config = require('../../config/main');
var dbConnection = require('../../config/dbconnection');

// var dbConnection = mysql.createConnection(config.dbConnectionStringLocal);
// dbConnection.connect();

describe('user routes test', function(){

  var testUserId1, testUserId2;

  var testUser1 = {
    username: "testuser1",
    email: "123@123.com",
    password: '999',
    phone: '123',
    credit_card: '123' 
  };

  var testUser2 = {
    username: 'testuser2',
    email: "234@234.com",
    password: '234',
    phone: '888',
    credit_card: '234'
  }

  after(function(done){
    var queryString = 'DELETE FROM users WHERE username = ? or username = ?';
    dbConnection.query(queryString, [testUser1.username, testUser2.username], function(err, result){
      done();
    });
  });

  it('POST /', function(done){
    request(app)
      .post('/api/users/')
      .send(testUser2)
      .expect(200)
      .end(function(err,res){
        res.body.should.have.property('token');
        done();
      });
  });

});
