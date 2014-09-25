angular.module('clickaroos.account')

.factory('Account', ['$http', '$window', 'appServerUrl', function($http, $state, $window, appServerUrl) {
  var factory = {};

  factory.loginView = true;

  ////////////////////////////////////////////////////
  // Helper functions
  //

  var submitSuccess = function(data, status, headers, config) {
    console.log('submitSuccess');
    $window.sessionStorage.token = data.token;
    console.log('$window.sessionStorage.token', $window.sessionStorage.token);
    $state.go('dashboard');
  };

  var deleteSessionToken = function() {
    console.log('deleteSessionToken');
    if($window.sessionStorage) { delete $window.sessionStorage.token; }
  };

  var submitError = function(data, status, headers, config) {
    console.log('submitError');
    deleteSessionToken();
    console.log('$window.sessionStorage', $window.sessionStorage);
  };

  //
  // End Helper Functions
  ////////////////////////////////////////////////////

  factory.submitLogin = function(user) {
    console.log('submitLogin');
    console.log('username', user.username);
    console.log('password', user.password);

    $http.post(
      appServerUrl+'/auth/login',
      user
    ).success(function(data, status, headers, config) {
      // TODO: Should token be saved in global services?
      submitSuccess(data, status, headers, config);
    }).error(function(data, status, headers, config) {
      // TODO: login error
      submitError(data, status, headers, config);
      alert('Login error.');
    });
  };

  factory.submitSignup = function(user) {
    console.log('submitSignup');
    console.log('username', user.username);
    console.log('password', user.password);

    $http.post(
      appServerUrl+'/auth/signup',
      user
      ).success(function(data, status, headers, config) {
        // TODO: Should token be saved in global services?
        submitSuccess(data, status, headers, config);
      }).error(function(data, status, headers, config) {
        // TODO: login error
        submitError(data, status, headers, config);
        alert('Signup error.');
      });
  };
  
  factory.switchLoginSignupView = function() {
    factory.loginView = !factory.loginView;
    console.log('toggled');
    console.log('factory.loginView: ', factory.loginView);
  };

  factory.logout = function(user) {
    console.log('logout');
    deleteSessionToken();
  };

  return factory;
}]);
