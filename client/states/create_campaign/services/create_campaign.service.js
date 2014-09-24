angular.module('clickaroos.createCampaign')

.factory('CreateCampaign', ['$http', 'appServerUrl', function($http, appServerUrl) {
  var components = {};

  components.createCampaign = function(campaignName) {
    console.log('campaignName', campaignName);

    $http.post(
      appServerUrl+'/api/campaigns',
      campaignName
    ).success(function() {
      // success
    }).error(function() {
      // error
    });

  };

  return components;
}]);
