angular.module('clickaroos.account')

.factory('Account', ['$http', '$state', '$window', 'appServerUrl', 'Logout', function($http, $state, $window, appServerUrl, Logout) {
  var factory = {};

  factory.loginView = true;

  factory.loading = {
    login: false,
    signup: false
  };

  ////////////////////////////////////////////////////
  // Helper functions
  //

  var submitSuccess = function(redirect, data, status, headers, config) {
    // console.log('submitSuccess');
    $window.sessionStorage.token = data.token;
    // console.log('$window.sessionStorage.token', $window.sessionStorage.token);
    $state.go(redirect);
  };

  var submitError = function(data, status, headers, config) {
    console.log('submitError');
    Logout.deleteSessionToken();
    console.log('$window.sessionStorage', $window.sessionStorage);
    alert('There appears to be an error.\n' + data);
  };

  //
  // End Helper Functions
  ////////////////////////////////////////////////////

  factory.submitLogin = function(user) {
    factory.loading.login = true;

    // console.log('submitLogin');
    // console.log('username', user.username);
    // console.log('password', user.password);

    $http.post(
      appServerUrl+'/auth',
      user
    ).success(function(data, status, headers, config) {
      factory.loading.login = false;
      // TODO: Should token be saved in global services?
      submitSuccess('dashboard', data, status, headers, config);
    }).error(function(data, status, headers, config) {
      factory.loading.login = false;
      // TODO: login error
      submitError(data, status, headers, config);
    });
  };

  factory.submitSignup = function(user) {
    factory.loading.signup = true;

    console.log('submitSignup');
    console.log('username', user.username);
    console.log('password', user.password);

    $http.post(
      appServerUrl+'/api/users',
      user
    ).success(function(data, status, headers, config) {
      factory.loading.signup = false;
      // TODO: Should token be saved in global services?
      submitSuccess('create-campaign', data, status, headers, config);
    }).error(function(data, status, headers, config) {
      factory.loading.signup = false;
      // TODO: login error
      submitError(data, status, headers, config);
    });
  };
  
  factory.switchLoginSignupView = function() {
    factory.loginView = !factory.loginView;
    console.log('toggled');
    console.log('factory.loginView: ', factory.loginView);
  };

  return factory;
}]);
