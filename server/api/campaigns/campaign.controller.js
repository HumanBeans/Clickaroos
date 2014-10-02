'use strict'

var Campaign = require('./campaign.query');
var config = require('../../config/main.js');
var connection = require('../../config/dbconnection').connection;

exports.all = function(req, res, next){
  var queryString = 'SELECT * FROM campaigns';
  connection.query(queryString, function(err, campaigns){
    if(err) {
      return res.send(401);
    }
    res.status(200).json(campaigns);
  });
};

exports.index = function(req, res, next){
  Campaign.findAllCampaignByUserId(req.user._id, function(err, campaigns){
    if(err){
      return res.json('Something went wrong, try again');
    }
    res.status(200).json(campaigns);
  });
};

exports.create = function(req, res, next){
  Campaign.save(req.user._id, req.body, function(err, result){
    if(err){
      console.log('error in create:', err);
      return res.status(401).json('something went wrong, try again');
    }
    console.log('create arguments', arguments);
    res.status(201).json({ campaign_id: result.id });
  });
};

exports.show = function(req, res, next){
  Campaign.findById(req.params.campaign, function(err, campaign){
    if(err){
      return res.json('try agin');
    }
    if(!campaign){
      return res.status(401);
    }
    if(campaign.user_id !== req.user._id){
      return res.status(401);
    }
    res.status(200).json(campaign);
  });
};

exports.recent = function(req, res, next){
  Campaign.getRecent(req.body.num, function(err, campaigns){
    if(err){
      return res.json('try again');
    }
    res.status(200).json(campaigns);
  });
}

exports.update = function(req, res, next){
  Campaign.updateById(req.params.campaign, function(err,result){});
};

exports.remove = function(req, res, next){
  Campaign.deleteById(req.params.campaign, function(err, result){});
}

