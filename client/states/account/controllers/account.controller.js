angular.module('clickaroos.account', [])

.controller('AccountController', ['$scope', 'Account', function($scope, Account) {
  $scope.loginView = Account.loginView;

	$scope.user = {
  	username: '',
  	password: ''
  };

  $scope.$watch(function () { return Account.loginView }, function () {
    $scope.loginView = Account.loginView;
  });

  $scope.switchLoginSignupView = Account.switchLoginSignupView;
  $scope.submitLogin = Account.submitLogin;
  $scope.submitSignup = Account.submitSignup;
}]);
