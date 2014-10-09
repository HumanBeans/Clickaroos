angular.module('clickaroos.dashboard')

.factory('Dashboard', ['$http', '$q', 'appServerUrl', function($http, $q, appServerUrl) {
  var factory = {};

  factory.getRecentCampaigns = function() {
    var deferred = $q.defer();

    $http.get('/api/campaigns/recent')
    .success(function(data, status, headers, config) {
      console.log('data from server: ', data);
      deferred.resolve(data);
    }).error(function(data, status, headers, config) {
      deferred.reject(new Error(data));
    });

    return deferred.promise;
  };

  return factory;
}]);