angular.module('clickaroos.account', [])

.controller('AccountController', function($scope, Account) {

  $scope.user = {};
  $scope.user.username;
  $scope.user.password;

  $scope.submitLogin = Account.submitLogin;
  $scope.submitSignup = Account.submitSignup;
})

;