angular.module('clickaroos.campaignPage', [])

.controller('CampaignPageController', ['$scope', 'Campaign', 'campaignData', function($scope, Campaign, campaignData) {

  $scope.data = campaignData;
  console.log('campaign_page scope.data: ', $scope.data);
  // pull in chart color data for legend
  $scope.$on('dataReady', function(event, data) {
    event.preventDefault();
    var colors = data;

    // TODO: pull in necessary colors for charts from directives
    // var counter = 0;

    // for(var key in $scope.data.analytics.device_click) {
    //   $scope.data.analytics.device_click[key].color = colors[counter];
    //   $scope.data.analytics.device_open[key].color = colors[counter];
    //   counter++;
    // }
  });


}]);
