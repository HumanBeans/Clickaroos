angular.module('clickaroos.campaignList', [])

.controller('CampaignListController', ['$scope', 'CampaignList', function($scope, CampaignList) {
  
  $scope.user = {};
  $scope.campaigns = {};
  
  // TODO: getCampaigns function should be on global campaign model controller and services
}]);
