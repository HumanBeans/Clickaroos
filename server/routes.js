'use strict';

//////////////////////////////////////////////////////////
// API's Request Handlers
var abTestRequestHandlers = require( './api/ab_tests/main' );
var campaginRequestHandlers = require('./api/campaigns/main');
var queryRequestHandlers = require('./api/queries/main');
var timerRequestHandlers = require('./api/timers/main');
var userRequestHandlers = require('./api/users/main');
var imagesRequestHandlers = require('./api/images/main');
var authRequestHandlers = require('./auth/main');
var config = require('./config/main');
//////////////////////////////////////////////////////////
// Module Routes
module.exports = function( app ) {

  var env = app.get('env');

  app.use('/api/ab_tests', abTestRequestHandlers );

  // TODO: require and add request-handler for campaigns
  app.use('/api/campaigns', campaginRequestHandlers);

  app.use('/api/images', imagesRequestHandlers);

  // TODO: require and add request-handler for queries
  // app.use('/api/queries', queryRequestHandlers);

  // TODO: require and add request-handler for timers
  // app.use('/api/timers', timerRequestHandlers);

  // TODO: require and add request-handler for users
  app.use('/api/users', userRequestHandlers);

  app.use('/auth', authRequestHandlers);

  // D: Testing Redirect:
  app.use('/img.png', function( req, res ){
    res.send( "<img src='https://www.google.com/logos/doodles/2014/first-day-of-autumn-2014-5193866277814272.2-res.png'>" );
    // res.send( 'https://www.google.com/logos/doodles/2014/first-day-of-autumn-2014-5193866277814272.2-res.png' );
  } )

  // app.route('/').get( function( req, res ){
  //   res.send('server landing page');
  // });

  app.route('/*').get(function(req, res){

    if(env === 'production'){
      res.sendFile(config.root + '/wwwroot/client/index.html');
    }

    if(env === 'development'){
      res.sendFile(config.root + '/Clickaroos/client/index.html');
    }
  });
};

