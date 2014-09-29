angular.module('clickaroos.config', [])

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
  
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
    .state('campaign-page', {
      url: '/campaign/:campaign_id', // TODO: adjust if necessary
      templateUrl: 'states/campaign_page/campaign_page.html',
      controller: 'CampaignPageController',
      // Can use 
      resolve: {
        campaign_id: ['$stateParams', function($stateParams) {
          return $stateParams.campaign_id;
        }]
      }
    })
    .state('campaign-list', {
      url: '/campaigns',
      templateUrl: 'states/campaign_list/campaign_list.html'
    })

    // CREATE CLIENT TOOL PAGES
    // TODO: Make these nested states of campain page
    .state('campaign-page.ab-test', {
      url: '/ab-test', // TODO: adjust if necessary
      templateUrl: 'states/ab_test/ab_test.html',
      controller: 'AbTestController'
    })
    .state('timer', {
      url: '/campaign/:campaign_id/timer', // TODO: adjust if necessary
      templateUrl: 'states/campaign-page/timer/timer.html'
    })
    .state('query', {
      url: '/campaign/:campaign_id/query', // TODO: adjust if necessary
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

    .state("otherwise", {
      url: "*path",
      templateUrl: 'states/account/account.html',
      controller: 'AccountController'
    })
    ;

    // For Auth0
    $httpProvider.interceptors.push('AuthInterceptor');

}]);