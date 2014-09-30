// abTest requires ui.bootstrap!
angular.module('clickaroos.abTest', ['ui.bootstrap', 'angularFileUpload'])

.controller('AbTestController', ['$scope', 'AbTest', 'appServerUrl', 'campaign_id', function($scope, AbTest, appServerUrl, campaign_id) {

  console.log('campaign_id', campaign_id);
  AbTest.setCampaignId(campaign_id);
  
  $scope.abTest = AbTest.abTest;;
  // $scope.$watch('abTestTitle', function(newValue, oldValue) {
  //   AbTest.abTestTitle = $scope.abTestTitle;
  // });

  $scope.imagesAndReroutes = AbTest.imagesAndReroutes;
  $scope.addImageAndReroute = AbTest.addImageAndReroute;
  $scope.time = AbTest.time;
  $scope.submitImagesAndReroutes = AbTest.submitImagesAndReroutes;

  //////////////////////////////////////////////////////
  // For Angular/Bootstrap Timepicker Directive
  //

  $scope.mytime = new Date();

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    $scope.mytime = d;
  };

  $scope.changed = function () {
    $scope.time.start = $scope.mytime;
    console.log('$scope.time', $scope.time);
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };

  //
  // End Angular/Bootstrap Timepicker Directive
  //////////////////////////////////////////////////////

  //////////////////////////////////////////////////////
  // For ng-file-upload
  //

  $scope.onFileSelect = AbTest.onFileSelect;
  $scope.upload = AbTest.upload;

  //
  // End ng-file-upload
  //////////////////////////////////////////////////////
  
}])

;