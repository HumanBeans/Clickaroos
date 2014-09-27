'use strict';

angular.module('clickaroos', [
  'ui.router',
  'clickaroos.config',
  'clickaroos.account',
  'clickaroos.createCampaign',
  'clickaroos.campaignPage',
  'clickaroos.abTest',
  'clickaroos.dashboard'
  ])

// todo: Update accordingly
.constant('appServerUrl', 'http://APP-SERVER-URL-HERE')

;