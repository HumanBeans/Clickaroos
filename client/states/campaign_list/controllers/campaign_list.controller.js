angular.module('clickaroos.campaignList', [])

.controller('CampaignListController', ['$scope', 'CampaignList', function($scope, CampaignList) {
  
  $scope.user = {};
  $scope.campaigns = {};
  
  $scope.getCampaigns = CampaignList.getCampaigns;
}]);
