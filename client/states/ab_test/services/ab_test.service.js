angular.module('clickaroos.abTest')

.factory('AbTest', ['$http', 'appServerUrl', function($http, appServerUrl) {
  var factory = {};

  factory.imagesAndReroutes = [];
  factory.time = { start: '' };

  var dataToServer = {
    user_id: 1, // TODO: Modify from global services
    campaign_id: 2, // TODO: Modify from global services
    time: factory.time,
    images_and_reroutes: factory.imagesAndReroutes
  };

  factory.submitImagesAndReroutes = function() {
    $http.post(
      appServerUrl+'/api/ab_tests',
      dataToServer
    );
  };

  return factory;
}])

;