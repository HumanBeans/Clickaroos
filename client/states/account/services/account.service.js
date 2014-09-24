angular.module('clickaroos.account')

.factory('Account', ['$http', 'appServerUrl', function($http, appServerUrl) {
  var components = {};

  components.loginView = true;

  components.submitLogin = function(user) {
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

  components.submitSignup = function(user) {
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
  
  components.switchLoginSignupView = function() {
    components.loginView = !components.loginView;
    console.log('toggled');
    console.log('components.loginView: ', components.loginView);
  };

  return components;
}]);
