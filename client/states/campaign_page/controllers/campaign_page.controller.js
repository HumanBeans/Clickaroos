angular.module('clickaroos.campaignPage', [])

.controller('CampaignPageController', ['$scope', 'CampaignPage', function($scope, CampaignPage) {

  $scope.campaignInfo = CampaignPage.campaignInfo;

  $scope.currentApps = CampaignPage.currentApps;

}])

;