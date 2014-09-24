angular.module('clickaroos.config', [])
.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('account', {
      url: '/account',
      templateUrl: 'states/account/account.html',
      controller: 'AccountController'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'states/dashboard/dashboard.html'
    })
    .state('create-campaign', {
      url: '/create-campaign',
      templateUrl: 'states/create_campaign/create_campaign.html',
      controller: 'CreateCampaignController'
    })
    .state('campaign-page/:campaign-id', {
      url: '/campaign/:campaign-id', // TODO: adjust if necessary
      templateUrl: 'states/campaign_page/campaign_page.html',
      controller: 'CampaignPage'
    })
    .state('campaign-list', {
      url: '/campaigns/',
      templateUrl: 'states/campaign_list/campaign_list.html'
    })

    // CREATE CLIENT TOOL PAGES
    .state('ab-test', {
      url: '/campaign/:campaign-id/ab-test', // TODO: adjust if necessary
      templateUrl: 'states/campaign-page/ab_test/ab_test.html',
      controller: 'AbTestController'
    })
    .state('timer', {
      url: '/campaign/:campaign-id/timer', // TODO: adjust if necessary
      templateUrl: 'states/campaign-page/timer/timer.html'
    })
    .state('query', {
      url: '/campaign/:campaign-id/query', // TODO: adjust if necessary
      templateUrl: 'states/campaign-page/query/query.html'
    })

    // DUMMY ROUTES
    .state('dummy-campaign', {
      url: '/dummy-campaign',
      templateUrl: 'states/campaign_page/campaign_page.html',
      controller: 'CampaignPageController'
    })
    .state('dummy-ab', {
      url: '/dummy-ab',
      templateUrl: 'states/ab_test/ab_test.html',
      controller: 'AbTestController'
    })
    .state('dummy-timer', {
      url: '/dummy-timer',
      templateUrl: 'states/timer/timer.html'
    })
    .state('dummy-query', {
      url: '/dummy-query',
      templateUrl: 'states/query/query.html'
    })
});