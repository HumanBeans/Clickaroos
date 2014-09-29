angular.module('clickaroos.createCampaign')

.factory('CreateCampaign', ['$http', '$state', 'appServerUrl', function($http, $state, appServerUrl) {
  var factory = {};

  factory.campaignInfo = {
    campaign_title: ''
  };

  factory.createCampaign = function(campaignName) {
    console.log('factory.campaignInfo', factory.campaignInfo);

    $http.post(
      appServerUrl+'/api/campaigns',
      factory.campaignInfo
    ).success(function(data) {
      // success
      console.log('data', data);
      $state.go('campaign-page', data);
    }).error(function() {
      // error
      console.log('error in createCampaign!');
    });

  };

  return factory;
}]);
