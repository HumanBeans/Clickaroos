angular.module('clickaroos.campaignPage', [])

.controller('CampaignPageController', ['$scope', 'CampaignPage', 'campaign_id', function($scope, CampaignPage, campaign_id) {

  console.log('campaign_id in camp page controller', campaign_id);

  // Get campaign information from server
  CampaignPage.getCampaignInfo(campaign_id);

  $scope.campaignInfo = CampaignPage.campaignInfo;
  $scope.currentApps = CampaignPage.currentApps;

}])

;