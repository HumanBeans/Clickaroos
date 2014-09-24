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
      templateUrl: 'states/dashboard/dashboard.html',
      controller: 'DashboardController'
    })
    .state('create-campaign', {
      url: '/create-campaign',
      templateUrl: 'states/create_campaign/create_campaign.html',
      controller: 'CreateCampaignController'
    })
    .state('campaign-page/:campaign-id', {
      url: '/campaign/:campaign-id', // TODO: adjust if necessary
      templateUrl: 'states/campaign_page/campaign_page.html',
      controller: 'CampaignPageController'
    })
    .state('campaign-list', {
      url: '/campaigns/',
      templateUrl: 'states/campaign_list/campaign_list.html',
      controller: 'CampaignListController'
    })

    // CREATE CLIENT TOOL PAGES
    .state('ab-test', {
      url: '/campaign/:campaign-id/ab-test', // TODO: adjust if necessary
      templateUrl: 'states/ab_test/ab_test.html',
      controller: 'ABTestController'
    })
    .state('timer', {
      url: '/campaign/:campaign-id/timer', // TODO: adjust if necessary
      templateUrl: 'states/timer/timer.html',
      controller: 'TimerController'
    })
    .state('query', {
      url: '/campaign/:campaign-id/query', // TODO: adjust if necessary
      templateUrl: 'states/query/query.html',
      controller: 'QueryController'
    })

    // DUMMY ROUTES
    .state('dummy-campaign', {
      url: 'dummy-campaign',
      templateUrl: 'states/campaign_page/campaign_page.html',
      controller: 'CampaignPageController'
    })
    .state('dummy-ab', {
      url: 'dummy-ab',
      templateUrl: 'states/campaign_page/ab_test/ab_test.html',
      controller: 'ABTestController'
    })
    .state('dummy-timer', {
      url: 'dummy-timer',
      templateUrl: 'states/campaign_page/timer/timer.html',
      controller: 'TimerController'
    })
    .state('dummy-query', {
      url: 'dummy-query',
      templateUrl: 'states/campaign_page/query/query.html',
      controller: 'QueryController'
    })
});