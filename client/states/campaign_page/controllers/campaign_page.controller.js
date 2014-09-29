angular.module('clickaroos.campaignPage', [])

.controller('CampaignPageController', ['$scope', 'CampaignPage', function($scope, CampaignPage) {

  // console.log('$stateParams', $stateParams);

  $scope.campaignInfo = CampaignPage.campaignInfo;

  $scope.currentApps = CampaignPage.currentApps;

}])

;