// TODO: Make global form validation
angular.module('clickaroos')

// From Auth0 - 'Cookies vs. Tokens. Getting auth right with Angular.JS'
.factory('AuthInterceptor', ['$rootScope', '$q', '$window', function($rootScope, $q, $window) {
  var factory = {};

  factory.request = function(config) {
    config.headers = config.headers || {};

    if($window.sessionStorage.token) {
      config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
    }

    return config;
  };

  factory.response = function(response) {
    if(response.status === 401) {
      // TODO: handle case where user isn't authenticated
      alert('User is not authenticated.');
    }

    return response || $q.when(response);
  };

  return factory;
}])

;