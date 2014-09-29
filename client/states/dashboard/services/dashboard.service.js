angular.module('clickaroos.dashboard')

.factory('Dashboard', ['$http', 'appServerUrl', function($http, appServerUrl) {
  var factory = {};

  // TODO: getCampaigns function should be on global campaign model controller and services
  factory.getRecentCampaigns = function() {
    // console.log("boom!");
    $http.get('/api/campaigns/recent')
    .success(function(data, status, headers, config) {
      console.log('data: ', data);
      console.log('status: ', status);
    }).error(function(data, status, headers, config) {
      console.log('error: ', data);
    });
  };

  return factory;
}]);