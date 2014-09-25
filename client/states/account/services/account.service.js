angular.module('clickaroos.account')

.factory('Account', ['$http', 'appServerUrl', function($http, appServerUrl) {
  var factory = {};

  factory.loginView = true;

  factory.submitLogin = function(user) {
    console.log('submitLogin');
    console.log('username', user.username);
    console.log('password', user.password);

    $http.post(
      appServerUrl+'/auth/login',
      user
    ).success(function() {
      // TODO: login success
    }).error(function() {
      // TODO: login error
    });
  };

  factory.submitSignup = function(user) {
    console.log('submitSignup');
    console.log('username', user.username);
    console.log('password', user.password);

    $http.post(
      appServerUrl+'/auth/signup',
      user
    ).success(function() {
      // TODO: signup success
    }).error(function() {
      // TODO: signup error
    });
  };
  
  factory.switchLoginSignupView = function() {
    factory.loginView = !factory.loginView;
    console.log('toggled');
    console.log('factory.loginView: ', factory.loginView);
  };

  return factory;
}]);
