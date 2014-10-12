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
      controller: 'DashboardController',
      resolve: {
        recentCampaigns: ['Dashboard', function(Dashboard) {
          return Dashboard.getRecentCampaigns();
        }],
        campaignData: ['Dashboard', 'Campaign', function(Dashboard, Campaign) {
          return Dashboard.getRecentCampaigns()
            .then(function(campaigns) {
              if(campaigns.length !== 0) {
                return Campaign.getCampaignData(campaigns[0].campaign_id);
              } else  {
                return;
              }
          });
        }]
      }
    })
    .state('create-campaign', {
      url: '/create-campaign',
      templateUrl: 'states/create_campaign/create_campaign.html',
      controller: 'CreateCampaignController'
    })
    .state('campaign-page', {
      url: '/campaign/:campaign_id',
      templateUrl: 'states/campaign_page/campaign_page.html',
      controller: 'CampaignPageController',
      resolve: {
        // campaign_id: ['$stateParams', function($stateParams) {
        //   return Number($stateParams.campaign_id);
        // }],
        campaignData: ['Campaign', function(Dashboard, Campaign) {
          return Campaign.getAllCampaignData()
            .then(function(campaigns) {
              if(campaigns.length !== 0) {
                return Campaign.getCampaignData(campaigns[0].campaign_id);
              } else  {
                return;
              }
          });
        }]
      }
    })
    .state('campaign-list', {
      url: '/campaigns',
      templateUrl: 'states/campaign_list/campaign_list.html',
      controller: 'CampaignListController'
    })

    .state('timer', {
      url: '/campaign/:campaign_id/timer', 
      templateUrl: 'states/campaign-page/timer/timer.html'
    })
    .state('query', {
      url: '/campaign/:campaign_id/query', 
      templateUrl: 'states/campaign-page/query/query.html'
    })
    // TODO: delete /dummy-* routes if no longer necessary
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
    });

    // For Auth0
    $httpProvider.interceptors.push('AuthInterceptor');
}]);
