angular.module('clickaroos.dashboard')

.factory('Dashboard', ['$http', 'appServerUrl', function($http, appServerUrl) {
  var factory = {};

  factory.recentCampaigns = [];

  factory.getRecentCampaigns = function() {

    $http.get('/api/campaigns/recent')
    .success(function(data, status, headers, config) {
      console.log('data from server: ', data);

      data.forEach(function(campaign, index, campaigns) {
        factory.recentCampaigns[index] = campaigns[index];
      });

      console.log('factory.recentCampaigns', factory.recentCampaigns);

    }).error(function(data, status, headers, config) {
      console.log('error: ', data);
    });

  };

  return factory;
}]);