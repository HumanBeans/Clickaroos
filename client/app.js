'use strict';

angular.module('clickaroos', [
  'ui.router',  
  'ui.bootstrap',
  'clickaroos.config',
  'clickaroos.directives',
  'clickaroos.directives.clientDoughnutDirective',
  'clickaroos.directives.deviceDoughnutDirective',
  'clickaroos.directives.timeSeriesDirective',
  'clickaroos.directives.imageBarGraphDirective',
  'clickaroos.directives.chartLegendDirective',
  'clickaroos.models',
  'clickaroos.models.campaign',
  'clickaroos.account',
  'clickaroos.dashboard',
  'clickaroos.createCampaign',
  'clickaroos.campaignPage',
  'clickaroos.abTest',
  'clickaroos.dashboard',
  'clickaroos.campaignList',
  'ngDialog'
])

// todo: Update accordingly
// .constant('appServerUrl', 'http://localhost:3000')
.constant('appServerUrl', '')

;