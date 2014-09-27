'use strict'

var express = require('express');
var controller = require('./campaign.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.post('/', auth.isAuthenticated(), controller.create);
router.get('/:campaign', auth.isAuthenticated(), controller.show);
router.put('/:campaign', auth.isAuthenticated(), controller.update);
router.delete('/:campaign', auth.isAuthenticated(), controller.remove);

module.exports = router;

