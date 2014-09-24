angular.module('clickaroos.createCampaign', [])

.controller('CreateCampaignController', ['$scope', 'CreateCampaign', function($scope, CreateCampaign) {

  $scope.campaignName = '';
  
  $scope.createCampaign = CreateCampaign.createCampaign;
}]);
