angular.module('clickaroos.abTest', ['ui.bootstrap'])

.controller('AbTestController', ['$scope', 'AbTest', function($scope, AbTest) {

  $scope.imagesAndReroutes = AbTest.imagesAndReroutes;

  // Create a new object for every new added image
  var newImageAndReroute = function() {
    return {
      image_url: '',
      reroute_url: ''
    };
  }

  $scope.addImageAndReroute = function() {
    $scope.imagesAndReroutes.push(newImageAndReroute());
  };

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
    d.setHours( 14 );
    d.setMinutes( 0 );
    $scope.mytime = d;
  };

  $scope.changed = function () {
    $scope.time.start = $scope.mytime;
    console.log($scope.time);
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };

  //
  // End Angular/Bootstrap Timepicker Directive
  //////////////////////////////////////////////////////
  
}])

;