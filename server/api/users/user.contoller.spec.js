'use strict'

var User = require('./user.query');
var jwt = require('jsonwebtoken');
var config = require('../../config/main.js');
var chai = require('chai');
var should = chai.should();
var request = require('supertest');
var app = require('../../server');

describe('user routes test', function(){
  it('POST /', function(done){

  })
})