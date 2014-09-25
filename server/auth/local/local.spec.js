'use strict'

var User = require('../../api/users/user.query');
var jwt = require('jsonwebtoken');
var config = require('../../config/main.js');
var chai = require('chai');
var should = chai.should();
var request = require('supertest');
var app = require('../../server');
var mysql = require('mysql');

var dbConnection = mysql.createConnection(config.dbConnectionStringLocal);
dbConnection.connect();

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
    var queryString = 'INSERT INTO users SET ?';
    dbConnection.query(queryString, [testUser1], function(err,result){
      done();
    })
  })
  after(function(done){
    var queryString = 'DELETE FROM users WHERE user_name = ? or user_name = ?';
    dbConnection.query(queryString, [testUser1.user_name, testUser2.user_name], function(err, result){
      done();
    });
  });

  it('POST /', function(done){
    request(app)
      .post('/auth/')
      .send({email:testUser1.email, password:testUser1.password})
      .expect(200)
      .end(function(err,res){
        console.log('++++++', res.body);
        // res.body.should.have.property('token');
        done();
      });
  });
});