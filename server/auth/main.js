'use strict'

var express = require('express');
var passport = require('passport');
//plan to relocate the User schema and UserDB helper functions in ./api/users
var User = require('../api/users/user.query');

var router = express.Router();

require('./local/passport').setup(User);

router.use('/', require('./local/main'));

module.exports = router;