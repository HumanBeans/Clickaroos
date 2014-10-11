angular.module('clickaroos.createCampaign', [])

.controller('CreateCampaignController', ['$scope', 'CreateCampaign', function($scope, CreateCampaign) {

  $scope.loading = CreateCampaign.loading;
  $scope.campaignInfo = CreateCampaign.campaignInfo;
  $scope.createCampaign = CreateCampaign.createCampaign;

}]);
