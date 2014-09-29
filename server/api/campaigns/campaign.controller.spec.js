'use strict'

var Campaign = require('./campaign.query');
var config = require('../../config/main.js');
var chai = require('chai');
var should = chai.should();
var request = require('supertest');
var app = require('../../server');
var mysql = require('mysql');
var config = require('../../config/main');
var connection = require('../../config/dbconnection');

describe('campaign routes test', function(){
  var token;
  
// The testuser is currently existing in the clickagoosdb with user_id = 1
  var testuser = {
    username: '1@1.com',
    password: '123'
  };

  var campaign1 = ['breakfirst', 0, 0, 1];
  var campaign2 = ['dinner', 0, 0, 1];


  //+++++++++ neat way to insert multiple rows at in a single query
  // before(function(done){
  //   var queryString = 'INSERT into campaigns (campaign_title, clicks, views, user_id) VALUES (?), (?)';
  //   connection.query(queryString, [campaign1, campaign2], function(err, result){
  //     console.log('++++++', err);
  //     request
  //     done();
  //   })
  // });

  before(function(done){
    request(app)
      .post('/auth/')
      .send(testuser)
      .end(function(err, res){
        token = res.body.token;
        done();
      })
  })

  after(function(done){
    token = undefined;
    done();
  });

  it('get the campaigns related to the logged in user', function(done){
    request(app)
      .get('/api/campaigns/')
      .set('authorization', 'Bearer ' + token)
      .expect(200)
      .end(function(err, res){
        res.body.length.should.equal(5);
        done();
      })
  });

});

