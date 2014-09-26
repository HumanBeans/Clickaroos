'use strict';

//////////////////////////////////////////////////////////
// API's Request Handlers
var abTestRequestHandlers = require( './api/ab_tests/main' );
var campaginRequestHandlers = require('./api/compaigns/main');
var queryRequestHandlers = require('./api/queries/main');
var timerRequestHandlers = require('./api/timers/main');
var userRequestHandlers = require('./api/users/main');
var authRequestHandlers = require('./auth/main');
var config = require('./config/main');
//////////////////////////////////////////////////////////
// Module Routes
module.exports = function( app ) {

  app.use('/api/ab_tests', abTestRequestHandlers );

  // TODO: require and add request-handler for campaigns
  app.use('/api/campaigns', campaginRequestHandlers);

  // TODO: require and add request-handler for queries
  app.use('/api/queries', queryRequestHandlers);

  // TODO: require and add request-handler for timers
  app.use('/api/timers', timerRequestHandlers);

  // TODO: require and add request-handler for users
  app.use('/api/users', userRequestHandlers);

  app.use('/auth', authRequestHandlers);

  // app.route('/').get( function( req, res ){
  //   res.send('server landing page');
  // });

  app.route('/*').get(function(req, res){
    res.sendFile(config.root + '/Clickaroos/client/index.html');
  })
};