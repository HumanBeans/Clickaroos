'use strict'

// var connection = require('../../config/dbconnection').connection;
var config = require('../../config/main.js');
var Q = require('q');
var bookshelf = require('../../config/dbconfig');
var Campaign = bookshelf.Model.extend({
  tableName: 'campaigns'
})
// var save = function(user_id, campaignObj, callback){
//   campaignObj.user_id = user_id;
//   var queryString = 'INSERT INTO campaigns SET ?';
//   connection.query(queryString, [campaignObj], callback);
// };

var save = function(user_id, campaignObj, callback){
  campaignObj.user_id = user_id;
  Campaign.forge(campaignObj).save()
    .then(function(campaign){
      callback(undefined, campaign.attributes);
    })
    .catch(function(err){
      callback(err);
    });
};

// var findById = function(campaign_id, callback){
//   var queryString = 'SELECT * FROM campaigns WHERE campaign_id = ?';
//   connection.query(queryString, [campaign_id], function(err, results){
//     callback(err, results[0]);
//   });
// };

var findById = function(campaign_id, callback){
  Campaign.where({campaign_id:campaign_id}).fetch()
    .then(function(campaign){
      callback(undefined, campaign.attributes);
    })
    .catch(function(err){
      callback(err);
    });
};

// var findAllCampaignByUserId = function(user_id, callback){
//   var queryString = 'SELECT * FROM campaigns WHERE user_id = ?';
//   connection.query(queryString, [user_id], callback);
// };

var findAllCampaignByUserId = function(user_id, callback){
  Campaign.collection().query().where({user_id: user_id}).select()
    .then(function(campaigns){
      callback(undefined, campaigns);
    })
    .catch(function(err){
      callback(err);
    });
};

// var getRecent = function(num, callback){
//   num = num || 4;
//   var queryString = 'SELECT * FROM campaigns ORDER BY -modified_at limit ?';
//   connection.query(queryString, [num], callback);
// }

var getRecent = function(num, callback){
  num = num || 4;
  console.log('in getRecent');
  Campaign.collection()
    .query(function(qb){
      console.log('in query qb');
      qb.orderBy('modified_at', 'desc')
        .limit(num);
    })
    // .query('order by', '-modified_at', 'limit', num)
    .fetch()
    .then(function(campaigns){
      console.log('++++++++++ get Recent', campaigns.models);
      callback(undefined, campaigns.models);
    })
    .catch(function(err){
      console.log('---------err', err);
    })
};

var deleteById = function(campaign_id, callback){
  Campaign.where({campaign_id: campaign_id}).destroy()
    .then(function(result){
      callback(undefined, result);
    })
    .catch(function(err){
      callback(err);
    });
}

exports.save = save;
exports.findById = findById;
exports.findAllCampaignByUserId = findAllCampaignByUserId;
exports.getRecent = getRecent;
exports.deleteById = deleteById;
