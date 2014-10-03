angular.module('clickaroos.dashboard', [])

.controller('DashboardController', ['$scope', 'Dashboard', function($scope, Dashboard) {
  $scope.user = {};
  $scope.campaigns = {};
  $scope.recentCampaigns = Dashboard.recentCampaigns;

  // **** DUMMY DATA FOR DIRECTIVE TESTING ****
  $scope.data = [];
  $scope.data.campaign = {};
  $scope.data.campaign.analytics = {};
  $scope.data.campaign.analytics.clicks = [];
  
  $scope.data.campaign.analytics.device = {};
  $scope.data.campaign.analytics.device['android'] = {label: 'Android', value: 40};
  $scope.data.campaign.analytics.device['iphone'] = {label: 'iPhone',value: 20};
  $scope.data.campaign.analytics.device['desktop'] = {label: 'Desktop',value: 30};
  $scope.data.campaign.analytics.device['tablet'] = {label: 'Tablet',value: 10};

  $scope.data.campaign.analytics.email_client = {};
  $scope.data.campaign.analytics.email_client['webmail'] = {label: 'Web mail',value: 65};
  $scope.data.campaign.analytics.email_client['outlook'] = {label: 'Outlook',value: 25};
  $scope.data.campaign.analytics.email_client['apple_mail'] = {label: 'Apple Mail',value: 10};
  // ****                 ****


  //colors to be used in analytics charts
  var colors = ['#FFF10E', '#19C4FF', '#CC1441', '#38FF00', '#1C19FF', '#CC1479', '#19E9FF', '#FFDC19'];
  
  var counter = 0;
 
  for(var key in $scope.data.campaign.analytics.device) {
    $scope.data.campaign.analytics.device[key].color = colors[counter];
    counter++;
  }
  
  counter = 0;

  for(var key in $scope.data.campaign.analytics.email_client) {
    $scope.data.campaign.analytics.email_client[key].color = colors[counter];
    counter++;
  }


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