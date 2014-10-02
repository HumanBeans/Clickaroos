'use strict'

var Campaign = require('./campaign.query');
var config = require('../../config/main.js');
var chai = require('chai');
var should = chai.should();
var mysql = require('mysql');
var config = require('../../config/main');
var connection = require('../../config/dbconnection').connection;
var Q = require('q');
var query = Q.nbind(connection.query, connection);

describe('campaign query test', function(){

  var campaign1_id = 1;
  var campaign1_title = 'Winter Sale';
  var user1_id = 1;
  var user2_id = 2;

  var campaign2 = {
    campaign_title: 'Jeans sale',
    clicks: 0,
    views: 0,
    user_id: user1_id
  };
  var campaign3 = {
    campaign_title: 'Shorts sale',
    clicks: 0,
    views: 0,
    user_id: user1_id
  };

  before(function(done){
    done();
  })

  after(function(done){
    var queryString = 'DELETE FROM campaigns WHERE campaign_title = ? or campaign_title = ?';
    connection.query(queryString, [campaign2.campaign_title, campaign3.campaign_title], function(err, result){
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
      campaigns.length.should.equal(6);
      done();
    });
  });

  it('should be able to save a campaign', function(done){
    Campaign.save(user1_id, campaign2, function(err, result){
      var queryString = 'SELECT * FROM campaigns WHERE campaign_title = ?';
      connection.query(queryString, [campaign2.campaign_title], function(err, campaign){
        campaign[0].campaign_id.should.equal(result.id);
        done();
      });
    });
  });

  it('should be able to return the nth recent campaigns', function(done){
    var queryString = 'INSERT into campaigns SET ?';
    query(queryString, [campaign3])
    connection.query(queryString, [campaign3], function(err, result){
      Campaign.getRecent(2, function(err, campaigns){
        campaigns.length.should.equal(2);
        campaigns[0].attributes.campaign_title.should.equal(campaign3.campaign_title);
        done();
      });
    });
  });

  xit('should be albe to delete a campaign', function(done){
    Campaign.deleteById(85, function(){
      console.log('here');
      done();
    });
  })

});

