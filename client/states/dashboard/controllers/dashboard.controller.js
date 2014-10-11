angular.module('clickaroos.dashboard', [])

.controller('DashboardController', ['$scope', 'Campaign', 'recentCampaigns', 'campaignData', function($scope, Campaign, recentCampaigns, campaignData) {

  $scope.recentCampaigns = recentCampaigns;
  $scope.data = campaignData;

  // Get data for single campaign
  $scope.getCampaignData = function(campaign) {
    Campaign.getCampaignData(campaign.campaign_id)
      .then(function(campaignData) {
        $scope.data = campaignData;
        console.log('$scope.data: ', $scope.data);
      });  
  }
}]);

 

