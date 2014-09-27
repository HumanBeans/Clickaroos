// abTest requires ui.bootstrap!
angular.module('clickaroos.abTest', ['ui.bootstrap', 'angularFileUpload'])

.controller('AbTestController', ['$scope', 'AbTest', 'appServerUrl', function($scope, AbTest, appServerUrl) {

  $scope.imagesAndReroutes = AbTest.imagesAndReroutes;
  $scope.addImageAndReroute = AbTest.addImageAndReroute;
  $scope.time = AbTest.time;
  $scope.submitImagesAndReroutes = AbTest.submitImagesAndReroutes;

  //////////////////////////////////////////////////////
  // For Angular/Bootstrap Timepicker Directive
  //

  // TODO: Move to services
  $scope.mytime = AbTest.mytime;
  $scope.hstep = AbTest.hstep;
  $scope.mstep = AbTest.mstep;
  $scope.options = AbTest.options;
  $scope.ismeridian = AbTest.ismeridian;
  $scope.toggleMode = AbTest.toggleMode;
  $scope.update = AbTest.update;
  $scope.changed = AbTest.changed;
  $scope.clear = AbTest.clear;

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