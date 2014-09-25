angular.module('clickaroos.abTest')

.factory('AbTest', ['$http', 'appServerUrl', function($http, appServerUrl) {
  var factory = {};

  factory.imagesAndReroutes = [];
  factory.time = { start: '' };

  // Create a new object for every new added image
  var newImageAndReroute = function() {
    return {
      image_url: '',
      reroute_url: ''
    };
  };

  factory.addImageAndReroute = function() {
    factory.imagesAndReroutes.push(newImageAndReroute());
  };

  var dataToServer = {
    user_id: 1, // TODO: Modify from global services
    campaign_id: 2, // TODO: Modify from global services
    time: factory.time,
    images_and_reroutes: factory.imagesAndReroutes
  };

  factory.submitImagesAndReroutes = function() {
    console.log('dataToServer', dataToServer);
    $http.post(
      appServerUrl+'/api/ab_tests',
      dataToServer
    );
  };

  return factory;
}])

;