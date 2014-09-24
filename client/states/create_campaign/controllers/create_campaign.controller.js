angular.module('clickaroos.createCampaign', [])

.controller('CreateCampaignController', function($scope, CreateCampaign) {

  $scope.campaignName = '';
  $scope.createCampaign = CreateCampaign.createCampaign;
});
