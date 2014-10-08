angular.module('clickaroos.dashboard', [])

.controller('DashboardController', ['$scope', 'Dashboard', function($scope, Dashboard) {
  $scope.user = {};
  $scope.campaigns = {};
  $scope.recentCampaigns = Dashboard.recentCampaigns;

  $scope.selectedIndex = 0;

  $scope.itemClicked = function ($index) {
    $scope.selectedIndex = $index;
  };

  // colors to be used in analytics charts
  var colors = ['#FFF10E', '#19C4FF', '#CC1441', '#38FF00', '#1C19FF', '#CC1479', '#19E9FF', '#FFDC19'];

  // **** DUMMY DATA FOR DIRECTIVE TESTING ****
  $scope.data = {};
  $scope.data.campaign = {};
  $scope.data.campaign.analytics = {};
  $scope.data.campaign.analytics.rawData = {};
  $scope.data.campaign.analytics.rawData.clicks = {};
  $scope.data.campaign.analytics.rawData.opens = {};

  // dummy for device doughnut
  $scope.data.campaign.analytics.device = {};
  $scope.data.campaign.analytics.device['android'] = {label: 'Android', value: 40};
  $scope.data.campaign.analytics.device['iphone'] = {label: 'iPhone',value: 20};
  $scope.data.campaign.analytics.device['desktop'] = {label: 'Desktop',value: 30};
  $scope.data.campaign.analytics.device['tablet'] = {label: 'Tablet',value: 10};

  // dummy for client doughnut
  $scope.data.campaign.analytics.email_client = {};
  $scope.data.campaign.analytics.email_client['webmail'] = {label: 'Web mail',value: 65};
  $scope.data.campaign.analytics.email_client['outlook'] = {label: 'Outlook',value: 25};
  $scope.data.campaign.analytics.email_client['apple_mail'] = {label: 'Apple Mail',value: 10};

  // dummy for time series
  /// clicks
  $scope.data.campaign.analytics.rawData.clicks.data = [16,7,4,0,14,22,12,12,3,10,30,35,27,10,12,8,10,2,1,3,1,7,11,15];
  $scope.data.campaign.analytics.rawData.clicks.total = 0;
  $scope.data.campaign.analytics.rawData.clicks.data.forEach(function(element, index, array) {
    $scope.data.campaign.analytics.rawData.clicks.total += element;
  });
  $scope.data.campaign.analytics.rawData.clicks.color = 'rgba(255,241,14,';
  $scope.data.campaign.analytics.rawData.clicks.label = 'Clicks';

  /// opens 
  $scope.data.campaign.analytics.rawData.opens.data = [35,25,28,30,20,40,45,50,29,19,66,57,55,68,33,24,22,9,11,19,18,24,23,39];
  $scope.data.campaign.analytics.rawData.opens.total = 0;
  $scope.data.campaign.analytics.rawData.opens.data.forEach(function(element, index, array) {
    $scope.data.campaign.analytics.rawData.opens.total += element;
  });
  $scope.data.campaign.analytics.rawData.opens.color = 'rgba(25,196,255,';
  $scope.data.campaign.analytics.rawData.opens.label = 'Opens';

  // CTR
  $scope.data.campaign.analytics.rawData.ctr = ($scope.data.campaign.analytics.rawData.clicks.total / $scope.data.campaign.analytics.rawData.opens.total).toFixed(3);


  // **** END DUMMY DATA ****


  
  var counter = 0;
  
  // populate colors for device doughnut
  for(var key in $scope.data.campaign.analytics.device) {
    $scope.data.campaign.analytics.device[key].color = colors[counter];
    counter++;
  }
  
  counter = 0;
  
  // populate colors for client doughnut
  for(var key in $scope.data.campaign.analytics.email_client) {
    $scope.data.campaign.analytics.email_client[key].color = colors[counter];
    counter++;
  }
  
  counter = 0;

  // TODO: getRecentCampaigns function should be on global campaign model controller and services
  $scope.getRecentCampaigns = Dashboard.getRecentCampaigns;
}]);
