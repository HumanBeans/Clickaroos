angular.module('clickaroos.campaignPage')

.factory('CampaignPage', ['$http', '$stateParams', 'appServerUrl', function($http, $stateParams, appServerUrl) {
  var factory = {};

  console.log('$stateParams', $stateParams);
  // Get campaign_id from stateParams
  var campaign_id = Number($stateParams.campaign_id);
  console.log('campaign_id', campaign_id);

  // When page loading, get Campaign Info from server.
  $http.get(
    appServerUrl+'/api/campaigns/'+campaign_id
  ).success(function(data) {
    // TODO: set campaignInfo and currentApps
    console.log('data in CampaignPage get request:', data);
    // Clone data object into factory.campaignInfo so controller's $scope can always reference the same object.
    for(var key in data) {
      factory.campaignInfo[key] = data[key];
    }
  }).error(function() {
    // error
    console.log('Error in CampaignPage get request');
  });

  factory.campaignInfo = {};

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