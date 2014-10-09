angular.module('clickaroos.campaignPage', [])

.controller('CampaignPageController', ['$scope', 'CampaignPage', 'campaign_id', function($scope, CampaignPage, campaign_id) {

  console.log('campaign_id in camp page controller', campaign_id);
 
  $scope.campaignInfo;
  // Get campaign information from server
  CampaignPage.getCampaignInfo(campaign_id)
    .then(function(campaignInfo) {
      $scope.campaignInfo = campaignInfo;
    });

}])

;