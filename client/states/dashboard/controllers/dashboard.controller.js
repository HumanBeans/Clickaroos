angular.module('clickaroos.dashboard', [])

.controller('DashboardController', ['$scope', 'Dashboard', function($scope, Dashboard) {
  
  $scope.user = {};
  $scope.campaigns = {};
  
  // TODO: getCampaigns function should be on global campaign model controller and services
}]);