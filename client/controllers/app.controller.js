angular.module('clickaroos')

.controller('DropdownCtrl', ['$scope', 'Logout', function($scope, Logout) {
  $scope.test = function() {
    console.log('test works');
  };

  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    console.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.logout = Logout.logout;
}]);