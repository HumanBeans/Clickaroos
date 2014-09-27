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
  var testuser = {
    username: '1@1.com',
    password: '1'
  };
  var campaign1 = {
    campaign_title = 'breakfirst',
    clicks: 0,
    views: 0
  };
  var campaign2 = {
    campaign_title = 'dinner',
    clicks: 0,
    views: 0
  };

  before(function(done){
    request(app)
      .post('/auth/')
      .send(testuser)
      .end(function(err, res){
        token = res.token;
        var queryString = 'CREATE'
      })
    done();
  })

  after(function(done){
    done();
  });

  it('get the campaigns related to the logged in user', function(done){
    request(app)
      .get('/api/campaigns/')
      .set('authorization', 'Bearer ' + token)
      .expect(200)
      .end(function(err, res){
        res.body.should
      })
    done();
  });

});

