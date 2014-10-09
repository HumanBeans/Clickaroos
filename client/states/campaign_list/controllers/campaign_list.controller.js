angular.module('clickaroos.campaignList', [])

.controller('CampaignListController', ['$scope', 'CampaignList', function($scope, CampaignList) {
  
  $scope.campaigns;
  $scope.filterCampaignName;
  
  $scope.getDate = function(str) {
    var date = new Date(str);
    console.log('date', date);
    return date.toString();
  };

  // Get campaigns
  CampaignList.getCampaigns()
    .then(function(campaigns) {
      $scope.campaigns = campaigns;
    });

}]);
