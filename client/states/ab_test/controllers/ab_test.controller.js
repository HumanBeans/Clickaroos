angular.module('clickaroos.abTest', [])

.controller('AbTestController', ['$scope', 'AbTest', function($scope, AbTest) {

  $scope.imagesAndReroutes = AbTest.imagesAndReroutes;

  // For adding multiple images
  var newImageAndReroute = function() {
    return {
      image_url: '',
      reroute_url: ''
    };
  }

  $scope.addImageAndReroute = function() {
    $scope.imagesAndReroutes.push(newImageAndReroute());
  };

  $scope.submitImagesAndReroutes = AbTest.submitImagesAndReroutes;

}])

;