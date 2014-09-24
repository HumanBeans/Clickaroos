angular.module('clickaroos.abTest')

.factory('AbTest', ['$http', 'appServerUrl', function($http, appServerUrl) {
  var factory = {};

  factory.imagesAndReroutes = [];

  var dataToServer = {
    user_id: 1, // TODO: Modify from global services
    campaign_id: 2, // TODO: Modify from global services
    imagesAndReroutes: factory.imagesAndReroutes
  };

  // TODO: Send userID and campaignID (from global services)
  factory.submitImagesAndReroutes = function(imagesAndReroutes) {
    $http.post(
      appServerUrl+'/api/ab_tests',
      dataToServer
    );
  };

  return factory;
}])

;