angular.module('clickaroos.campaignPage')

.factory('CampaignPage', ['$http', '$q', 'appServerUrl', function($http, $q, appServerUrl) {
  var factory = {};

  // Get Campaign Info from server.
  factory.getCampaignInfo = function(campaign_id) {
    var deferred = $q.defer();

    $http.get(
      appServerUrl+'/api/campaigns/'+campaign_id
    ).success(function(data) {
      deferred.resolve(data);
      // TODO: set campaignInfo and currentApps
      // console.log('data in CampaignPage get request:', data);
      // Clone data object into factory.campaignInfo so controller's $scope can always reference the same object.
      // for(var key in data) {
      //   factory.campaignInfo[key] = data[key];
      // }
    }).error(function(error) {
      deferred.reject(new Error(error));
      // console.log('Error in CampaignPage get request');
    });
    
    return deferred.promise;
  };

  return factory;
}])

;