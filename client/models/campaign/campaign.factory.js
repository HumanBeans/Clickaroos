angular.module('clickaroos.models.campaign', [])

.factory('Campaign', ['$http', '$q', 'appServerUrl', function($http, $q, appServerUrl) {
  var factory = {};

  factory.getCampaignData = function(campaignID) {
    var deferred = $q.defer();

    $http.get(appServerUrl +'/api/campaigns/' + campaignID)
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      })
      .error(function(data, status, headers, config) {
        deferred.reject(new Error(data));
      });

      return deferred.promise;
  };

  factory.getAllCampaignData = function() {
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
