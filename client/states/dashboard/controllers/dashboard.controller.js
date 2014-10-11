angular.module('clickaroos.dashboard', [])

.controller('DashboardController', ['$scope', 'Campaign', 'recentCampaigns', 'campaignData', function($scope, Campaign, recentCampaigns, campaignData) {
  
  var counter = 0;
  var colors = ['#F25F51', '#F5CF32', '#56D9CD', '#3AA1BF', '#9ED960', '#CC1479', '#19E9FF', '#FFDC19'];
  
  $scope.recentCampaigns = recentCampaigns;
  $scope.data = campaignData;

  // Get data for single campaign
  $scope.getCampaignData = function(campaign) {
    Campaign.getCampaignData(campaign.campaign_id)
      .then(function(campaignData) {
        $scope.data = campaignData;
        $scope.apply();
      });  
  }
  
  // populate colors for device doughnut
  for(var key in $scope.data.analytics.device_click) {
    $scope.data.analytics.device_click[key].color = colors[counter];
    counter++;
  }
  
  counter = 0;
  
  // populate colors for client doughnut
  for(var key in $scope.data.analytics.email_client) {
    $scope.data.analytics.email_client[key].color = colors[counter];
    counter++;
    }  
}]);

 

