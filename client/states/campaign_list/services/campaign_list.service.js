angular.module('clickaroos.campaignList')

.factory('CampaignList', ['$http', 'appServerUrl', function($http, appServerUrl) {
  var components = {};

  components.getCampaigns = function() {
    $http.get(appServerUrl + '/api/campaigns')
    .success(function() {
      // TODO: getCampaigns success
    })
    .error(function() {
      // TODO: getCampaigns error
    });
  };

  return components;
  
}]);
