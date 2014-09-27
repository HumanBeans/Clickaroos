'use strict'

var Campaign = require('./campaign.query');
var config = require('../../config/main.js');

exports.index = function(req, res, next){
  Campaign.findAllCampaignByUserId(req.user._id, function(err, campaigns){
    if(err){
      res.json('Something went wrong, try again');
    }
    res.status(200).json(campaigns);
  });
};

exports.create = function(req, res, next){
  Campaign.save(req.user._id, req.body, function(err, result){
    if(err){
      res.json('something went wrong, try again');
    }
    res.status(201).json('Created campaign with id', result.insertId);
  });
};

exports.show = function(req, res, next){
  Campaign.findById(req.params.campaign, function(err, campaign){
    if(err){
      res.json('try agin');
    }
    if(!campaign){
      res.status(401);
    }
    if(campaign.user_id !== req.user._id){
      res.status(401);
    }
    res.status(200).json(campaign);
  });
};

exports.update = function(req, res, next){
  Campaign.updateById(req.params.campaign, function(err,result){});
};

exports.remove = function(req, res, next){
  Campaign.deleteById(req.params.campaign, function(err, result){});
}

