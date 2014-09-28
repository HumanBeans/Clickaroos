'use strict'

var Campaign = require('./campaign.query');
var config = require('../../config/main.js');
var chai = require('chai');
var should = chai.should();
var mysql = require('mysql');
var config = require('../../config/main');
var connection = require('../../config/dbconnection');

describe('campaign query test', function(){

  var campaign1_id = 30;
  var campaign1_title = 'Winter Sale';
  var user1_id = 15;
  var user2_id = 2;
  var campaign2 = {
    campaign_title: 'Spring sale',
    clicks: 0,
    views: 0
  }

  before(function(done){
    done();
  })

  after(function(done){
    var queryString = 'DELETE FROM campaigns WHERE campaign_title = ?';
    connection.query(queryString, [campaign2.campaign_title], function(err, result){
      done();
    })
  });

  it('should find a campaign with the given id', function(done){
    Campaign.findById(campaign1_id, function(err, campaign){
      campaign.campaign_title.should.equal(campaign1_title);
      done();
    })
  });

  it('should find all the campaigns with the given user', function(done){
    Campaign.findAllCampaignByUserId(user1_id, function(err, campaigns){
      campaigns.length.should.equal(3);
      done();
    });
  });

  it('should be able to save a campaign', function(done){
    Campaign.save(user2_id, campaign2, function(err, result){
      var queryString = 'SELECT * FROM campaigns WHERE campaign_title = ?';
      connection.query(queryString, ['Spring sale'], function(err, campaign){
        campaign[0].campaign_id.should.equal(result.insertId);
        done();
      })
    })
  })

});

