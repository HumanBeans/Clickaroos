angular.module('clickaroos.dashboard')

.factory('Dashboard', ['$http', 'appServerUrl', function($http, appServerUrl) {
  var factory = {};

  factory.recentCampaigns = [];

  $http.get('/api/campaigns/recent')
  .success(function(data, status, headers, config) {
    console.log('data: ', data);

    for(var campaign in data) {
      factory.recentCampaigns.push(data[campaign]);
    }

    console.log('factory.recentCampaigns', factory.recentCampaigns);

  }).error(function(data, status, headers, config) {
    console.log('error: ', data);
  });

  return factory;
}]);