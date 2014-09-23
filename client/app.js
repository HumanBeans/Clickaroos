'use strict';

angular.module('clickaroos', [
  'ui.router',
  'clickaroos.config',
  'clickaroos.account',
  'clickaroos.createCampaign'
  ])

// todo: Update accordingly
.constant('appServerUrl', 'http://APP-SERVER-URL-HERE')

;