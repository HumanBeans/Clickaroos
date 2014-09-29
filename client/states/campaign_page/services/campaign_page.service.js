angular.module('clickaroos.campaignPage')

.factory('CampaignPage', ['$http', 'appServerUrl', function($http, $stateParams, appServerUrl) {
  var factory = {};

  // When page loading, get Campaign Info from server.
  $http.get(
    // TODO: change :campaign accordingly
    appServerUrl+'/api/campaigns/:campaign'
  ).success(function() {
    // TODO: set campaignInfo and currentApps
  }).error(function() {
    // error
  });

  factory.campaignInfo = {
    name: '(Campaign Name Goes Here)',
    description: '(Campaign Description Goes Here)'
  };

  // TODO: Populate via GET request
  factory.currentApps = [
    {
      id: 1,
      name: 'First Campaign',
      apps: {
        ab_tests: [
          {
            images: ['image urls here', 'another one'],
            title: 'AB Test Title',
            start_time: '5:00PM',
            minutes_after_start: '20',
            winner: 'image url here'
          }
        ],
        queries: [/* TODO */],
        timers: [/* TODO */]
      },
      reports: {
        clicks: 50,
        views: 100,
        device: {
          desktop: 1,
          tablet: 2,
          android: 3,
          iphone: 4
        },
        email_client: {
          webmail: 1,
          outlook: 2,
          apple_mail: 3
        }
        // view_time: '?', // TODO: What will this look like?
        // location: '?'   // TODO: What will this look like?
      }
    }
  ];

  return factory;
}])

;