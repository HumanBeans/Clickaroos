'use strict';

var express = require('express');
var controller = require('./images.controller');
var auth = require('../../auth/auth.service.js');
var router = express.Router();

// TODO: remove
router.post('/', controller.createImage);

// router.post('/', auth.isAuthenticated, controller.createImage);

module.exports = router;