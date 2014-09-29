angular.module('clickaroos.dashboard', [])

.controller('DashboardController', ['$scope', 'Dashboard', function($scope, Dashboard) {
  $scope.user = {};
  $scope.campaigns = {};

  // TODO: port this dummy data over to spec file for use in tests
  $scope.data = [];
  $scope.data.campaign = {};
  $scope.data.campaign.analytics = {};
  $scope.data.campaign.analytics.device = {};
  $scope.data.campaign.analytics.device['iPhone'] = 20;
  $scope.data.campaign.analytics.device['android'] = 30;
  $scope.data.campaign.analytics.device['tablet'] =  10;
  $scope.data.campaign.analytics.device['desktop'] = 40;

  //colors to be used in analytics charts
  $scope.data.colors = ['#F7464A', '#46BFBD', '#FDB45C', '42FF00'];
  $scope.data.highlights = ['#FF5A5E', '#5AD3D1', '#FFC870', 'A3FF6E']; 
  
  // TODO: getRecentCampaigns function should be on global campaign model controller and services
  $scope.getRecentCampaigns = Dashboard.getRecentCampaigns;
}]);