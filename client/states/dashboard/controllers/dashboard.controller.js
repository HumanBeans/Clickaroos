angular.module('clickaroos.dashboard', [])

.controller('DashboardController', ['$scope', 'Dashboard', function($scope, Dashboard) {
  $scope.user = {};
  $scope.campaigns = {};

  // TODO: port this dummy data over to spec file for use in tests
  $scope.data = [];
  $scope.data.campaign = {};
  $scope.data.campaign.analytics = {};
  $scope.data.campaign.analytics.clicks = [];
  
  $scope.data.campaign.analytics.device = {};
  $scope.data.campaign.analytics.device['android'] = 40;
  $scope.data.campaign.analytics.device['iphone'] = 20;
  $scope.data.campaign.analytics.device['desktop'] = 30;
  $scope.data.campaign.analytics.device['tablet'] = 10;

  $scope.data.campaign.analytics.email_client = {};
  $scope.data.campaign.analytics.email_client['webmail'] = 65;
  $scope.data.campaign.analytics.email_client['outlook'] = 25;
  $scope.data.campaign.analytics.email_client['apple_mail'] = 10;

  //colors to be used in analytics charts
  $scope.data.colors = ['#F7464A', '#46BFBD', '#FDB45C', '42FF00'];
  $scope.data.highlights = ['#FF5A5E', '#5AD3D1', '#FFC870', 'A3FF6E']; 
  
  // TODO: getRecentCampaigns function should be on global campaign model controller and services
  $scope.getRecentCampaigns = Dashboard.getRecentCampaigns;
}]);

//DATA FOR FORMATTING REFERENCE
// var data = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//         {
//             label: "My First dataset",
//             fillColor: "rgba(220,220,220,0.2)",
//             strokeColor: "rgba(220,220,220,1)",
//             pointColor: "rgba(220,220,220,1)",
//             pointStrokeColor: "#fff",
//             pointHighlightFill: "#fff",
//             pointHighlightStroke: "rgba(220,220,220,1)",
//             data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//             label: "My Second dataset",
//             fillColor: "rgba(151,187,205,0.2)",
//             strokeColor: "rgba(151,187,205,1)",
//             pointColor: "rgba(151,187,205,1)",
//             pointStrokeColor: "#fff",
//             pointHighlightFill: "#fff",
//             pointHighlightStroke: "rgba(151,187,205,1)",
//             data: [28, 48, 40, 19, 86, 27, 90]
//         }
//     ]
// };