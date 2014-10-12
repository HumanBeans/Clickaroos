angular.module('clickaroos.dashboard', [])

.controller('DashboardController', ['$scope', 'Campaign', 'recentCampaigns', 'campaignData', function($scope, Campaign, recentCampaigns, campaignData) {

  $scope.recentCampaigns = campaignData.allCampaigns;
  $scope.data = campaignData.thisCampaigns;

  // get data for single campaign
  $scope.getCampaignData = function(campaign) {
    Campaign.getCampaignData(campaign.campaign_id)
      .then(function(campaignData) {
        $scope.data = campaignData;
      });  
  }
  
  // pull in chart color data for legend
  $scope.$on('dataReady', function(event, data) {
    event.preventDefault();
    var colors = data;
    var counter = 0;

    for(var key in $scope.data.analytics.device_click) {
      $scope.data.analytics.device_click[key].color = colors[counter];
      $scope.data.analytics.device_open[key].color = colors[counter];
      counter++;
    }
  });
}]);

 

