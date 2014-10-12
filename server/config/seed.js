'use strict'

var User = require('../api/users/user.query');
var Campaign = require('../api/campaigns/campaign.query');
var connection = require('./dbconnection.js').connection;
// var connection = require('./dbconnection.js').testingConnection;
var bookshelf = require('./dbconfig');

// var User = bookshelf.Model.extend({
//   tableName: 'users'
// });

var Q = require('q');
var query = Q.nbind(connection.query, connection);

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
var campaign1 = ['Winter Sale', 1];
var campaign2 = ['Fall Sale', 1];
var campaign3 = ['Summer Sale', 1];
var campaign4 = ['Breakfast', 1];
var campaign5 = ['Dinner', 1];

var queryString_saveCampaigns = 'INSERT INTO campaigns (campaign_title, user_id) VALUES (?), (?), (?), (?), (?)';

User.save(user1, function(){
  console.log('user1 generated');
});

User.save(user2, function(){
  console.log('user2 generated');
});

query('truncate campaigns')
  .then(function(err, result){
    return query(queryString_saveCampaigns, [campaign1, campaign2, campaign3, campaign4, campaign5])
  })
  .then(function(err, result){
    console.log('Seed data generated susscessfully!');
  });

// query('truncate users')
//   .then(function(err, result){ return query('INSERT INTO users SET ?', [user1]);})
//   .then(function(err, result){ return query('INSERT INTO users SET ?', [user2]);})
//   .then(function(err, result){ return query('truncate campaigns');})
//   .then(function(err, result){
//     return query(queryString_saveCampaigns, [campaign1, campaign2, campaign3, campaign4, campaign5])
//   })
//   .then(function(err, result){
//     console.log('Seed data generated susscessfully!');
//   });


