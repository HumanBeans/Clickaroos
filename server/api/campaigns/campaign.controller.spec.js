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

  before(function(done){
    done();
  })

  after(function(done){
    done();
  });

  it('should do something', function(done){
    done();
  });

});