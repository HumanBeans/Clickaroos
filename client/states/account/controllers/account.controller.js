angular.module('clickaroos.account', [])

.controller('AccountController', ['$scope', 'Account', function($scope, Account) {
	$scope.user = {
  	username: '',
  	password: ''
  };

  $scope.submitLogin = Account.submitLogin;
  $scope.submitSignup = Account.submitSignup;
}]);
