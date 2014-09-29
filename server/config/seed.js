'use strict'

var User = require('../api/users/user.query');
var Campaign = require('../api/campaigns/campaign.query');
var connection = require('./dbconnection.js');
var Q = require('q');
var query = Q.nbind(connection.query, connection);
var user_create = Q.nbind(User.save, User);

var user1 = {
  username: 'kangaroo',
  password: '123',
  email: '1@1.com',
  phone: '123'
};

var user2 = {
  username: '2',
  password: '2',
  email: '2@2.com',
  phone:'234'
};

// the test campaigns user_id will always be set to 1
var campaign1 = ['Winter Sale', 1, 4000, 10000, 400, 2000, 800, 700, 1000];
var campaign2 = ['Fall Sale', 1, 3000, 9000, 400, 1500, 600, 500, 700];
var campaign3 = ['Summer Sale', 1, 1000, 7000, 100, 600, 150, 130, 400];
var campaign4 = ['Breakfast', 1, 2000, 8000, 200, 500, 100, 100, 300];
var campaign5 = ['Dinner', 1, 5000, 9000, 300, 600, 700, 200, 500];

var queryString_saveCampaigns = 'INSERT INTO campaigns (campaign_title, user_id, clicks, views, tablet, desktop, android, iphone, webmail) VALUES (?), (?), (?), (?), (?)';

query('truncate users')
  .then(function(err, result){return user_create(user1);})
  .then(function(err, result){return user_create(user2);})
  .then(function(err, result){return query('truncate campaigns');})
  .then(function(err, result){
    return query(queryString_saveCampaigns, [campaign1, campaign2, campaign3, campaign4, campaign5])
  })
  .then(function(err, result){
    console.log('Seed data generated susscessfully!');
  });

