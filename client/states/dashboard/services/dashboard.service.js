angular.module('clickaroos.dashboard')

.factory('Dashboard', ['$http', 'appServerUrl', function($http, appServerUrl) {
  var factory = {};

  factory.recentCampaigns = [];

  $http.get('/api/campaigns/recent')
  .success(function(data, status, headers, config) {
    console.log('data: ', data);

    data.forEach(function(campaign) {
      factory.recentCampaigns.push(campaign);
    });

    console.log('factory.recentCampaigns', factory.recentCampaigns);

  }).error(function(data, status, headers, config) {
    console.log('error: ', data);
  });

  return factory;
}]);