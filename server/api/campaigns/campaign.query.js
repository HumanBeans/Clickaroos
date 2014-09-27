'use strict'

var connection = require('../../config/dbconnection');
var mysql = require('mysql');
var config = require('../../config/main.js');
var Q = require('q');

var save = function(user_id, campaignObj, callback){
  campaignObj.user_id = user_id;
  var queryString = 'INSERT INTO campaigns SET ?';
  connection.query(queryString, [campaignObj], callback);
};

var findById = function(campaign_id, callback){
  var queryString = 'SELECT * FROM campaigns WHERE campaign_id = ?';
  connection.query(queryString, [campaign_id], function(err, results){
    callback(err, results[0]);
  });
};

var findAllCampaignByUserId = function(user_id, callback){
  var queryString = 'SELECT * FROM campaigns WHERE user_id = ?';
  connection.query(queryString, [user_id], callback);
};

exports.save = save;
exports.findById = findById;
exports.findAllCampaignByUserId = findAllCampaignByUserId;