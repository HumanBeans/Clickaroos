angular.module('clickaroos.models.campaign', [])

.factory('Campaign', ['$http', '$q', function($http, $q) {
  var factory = {};

  factory.getData = function(campaignID) {
    var deferred = $q.defer();

    $http.get('api/campaigns/:' + campaignID)
      .success(function(data, status, headers, config) {
        console.log('data from server: ', data);
        deferred.resolve(data);
      })
      .error(function(data, status, headers, config) {
        deferred.reject(new Error(data));
      });

      return deferred.promise;
  };

  factory.getAllData = function() {
    var deferred = $q.defer();

    $http.get('api/campaigns/all')
      .success(function(data, status, headers, config) {
        console.log('data from server: ', data);
        deferred.resolve(data);
      })
      .error(function(data, status, headers, config) {
        deferred.reject(new Error(data));
      });

      return deferred.promise;
  };

  return factory;
}]);