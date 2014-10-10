'use strict'

// var connection = require('../../config/dbconnection').connection;
var config = require('../../config/main.js');
var Q = require('q');
var bookshelf = require('../../config/dbconfig');
var Campaign = bookshelf.Model.extend({
  tableName: 'campaigns'
});
var ABTest = bookshelf.Model.extend({
  tableName: 'ab_tests'
});
var ABImg = bookshelf.Model.extend({
  tableName: 'ab_imgs'
});

var ABOpenTime = bookshelf.Model.extend({
  tableName: 'ab_open_time'
});

var ABClickTime = bookshelf.Model.extend({
  tableName: 'ab_click_time'
});

var ABClickDevice = bookshelf.Model.extend({
  tableName: 'ab_click_device'
});

//////////dummy data for email client and device

var email_client_dummy_data = {};
email_client_dummy_data['webmail'] = {label: 'Web mail',value: 65};
email_client_dummy_data['outlook'] = {label: 'Outlook',value: 25};
email_client_dummy_data['apple_mail'] = {label: 'Apple Mail',value: 10};


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
  var result = {};
  result.analytics = {rawData:{}, device_open:{}, device_click:{}};
  // result.analytics.device = device_dummy_data;
  result.analytics.email_client = email_client_dummy_data;
  result.analytics.rawData.clicks = {};
  result.analytics.rawData.clicks.label = 'clicks';
  result.analytics.rawData.clicks.data = [];
  result.analytics.rawData.opens = {};
  result.analytics.rawData.opens.label = 'opens';
  result.analytics.rawData.opens.data = [];
  // result.analytics.rawData.winner = {};

  Campaign.where({campaign_id:campaign_id}).fetch()
    .then(function(campaign){
      result.campaign = campaign.attributes;

      //pass the device data into analytics

      result.analytics.device_open.iphone = campaign.attributes.iphone;
      result.analytics.device_open.ipad = campaign.attributes.ipad;
      result.analytics.device_open.android_phone = campaign.attributes.android_phone;
      result.analytics.device_open.android_pad = campaign.attributes.android_pad;
      result.analytics.device_open.desktop = campaign.attributes.desktop;
      result.analytics.device_open.device_other = campaign.attributes.device_other;

      return ABTest.collection().query().where({campaign_id: campaign_id}).select();
    })
    .then(function(ab_tests){
      result.analytics
      result.ab_tests = ab_tests;
      // console.log('+++++++++', result);
      return ABOpenTime.collection().query().where({campaign_id: campaign_id}).select();
      // callback(undefined, result);
    })
    .then(function(abOpenTime){
      abOpenTime.forEach(function(item){
        result.analytics.rawData.abTestId = item.ab_test_id;
        for (var key in item){
          result.analytics.rawData.opens.data.push(item[key]);
        }
      })
      // console.log('========= ', result.analytics.rawData.opens);
      return ABClickTime.collection().query().where({campaign_id: campaign_id}).select();
    })
    .then(function(abClickTime){
      // console.log('result+++++++', result);
      abClickTime.forEach(function(item){
        for (var key in item){
          result.analytics.rawData.clicks.data.push(item[key]);
        }
      });

      return ABClickDevice.collection().query().where({campaign_id: campaign_id}).select();
    })
    .then(function(abClickDevice){


      result.analytics.device_click = {
        'iphone': 0,
        'ipad': 0,
        'android_phone': 0,
        'android_pad': 0,
        'desktop': 0,
        'device_other': 0
      };

      abClickDevice.forEach(function(item){
        result.analytics.device_click.iphone += item.iphone;
        result.analytics.device_click.ipad += item.ipad;
        result.analytics.device_click.android_phone += item.android_phone;
        result.analytics.device_click.android_pad += item.android_pad;
        result.analytics.device_click.desktop += item.desktop;
        result.analytics.device_click.device_other += item.device_other;
      })

      result.analytics.device_open.iphone


      console.log('===========', result);
      callback(undefined, result);

    })
    // .catch(function(err){
    //   callback(err);
    // });
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

var getRecent = function(user_id, num, callback){

  num = num || 4;
  console.log('in getRecent');

  Campaign.collection()
    .query(function(qb){
      console.log('in query qb');
      qb.where({user_id: user_id})
        .orderBy('modified_at', 'desc')
        .limit(num);
    })
    // .query('order by', '-modified_at', 'limit', num)
    .fetch()
    .then(function(campaigns){
      callback(undefined, campaigns.models);
    })
    .catch(function(err){
      callback(err);
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
