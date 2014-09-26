'use strict'

var express = require('express');
var controller = require('./user.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.post('/', controller.create);

// router.get('/:id', controller.getProfile);

router.get('/:id', auth.isAuthenticated(), controller.getProfile);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);

module.exports = router;
