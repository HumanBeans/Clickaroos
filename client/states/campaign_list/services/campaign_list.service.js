angular.module('clickaroos.campaignList')

.factory('CampaignList', ['$http', '$q', 'appServerUrl', function($http, $q, appServerUrl) {
  var factory = {};

  factory.getDate = function(str) {
    var date = new Date(str);
    console.log('date', date);
    return date.toString();
  };

  factory.getCampaigns = function() {
    var deferred = $q.defer();

    $http.get(appServerUrl+'/api/campaigns')
      .success(function(campaigns) {
        console.log('campaigns', campaigns);
        deferred.resolve(campaigns);
      })
      .error(function(error) {
        deferred.reject(new Error(error));
      });

    // Return a promise containing the campaigns
    return deferred.promise;
  };

  return factory;
  
}]);
