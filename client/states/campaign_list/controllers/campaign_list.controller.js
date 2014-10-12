angular.module('clickaroos.campaignList', [])

.controller('CampaignListController', ['$scope', 'CampaignList', function($scope, CampaignList) {
  
  $scope.campaigns;
  $scope.filterCampaignName;

  // Get campaigns
  CampaignList.getCampaigns()
    .then(function(campaigns) {
      $scope.campaigns = campaigns;
      console.log('$scope.campaigns: ', $scope.campaigns);
    });
  
  $scope.getDate = CampaignList.getDate;

}]);
