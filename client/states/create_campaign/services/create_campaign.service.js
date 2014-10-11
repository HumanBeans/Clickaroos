angular.module('clickaroos.createCampaign')

.factory('CreateCampaign', ['$http', '$state', 'appServerUrl', function($http, $state, appServerUrl) {
  var factory = {};

  factory.loading = {
    createCampaign: false
  };

  factory.campaignInfo = {
    campaign_title: ''
  };

  factory.createCampaign = function(campaignName) {
    factory.loading.createCampaign = true;

    console.log('factory.campaignInfo', factory.campaignInfo);

    $http.post(
      appServerUrl+'/api/campaigns',
      factory.campaignInfo
    ).success(function(data) {
      factory.loading.createCampaign = false;
      console.log('data', data);
      $state.go('campaign-page', data);
    }).error(function(data) {
      factory.loading.createCampaign = false;
      alert('There seems to be an error.\n' + data);
    });

  };

  return factory;
}]);
