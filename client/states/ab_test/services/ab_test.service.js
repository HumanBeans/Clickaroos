angular.module('clickaroos.abTest')

.factory('AbTest', ['$http', '$upload', 'appServerUrl', function($http, $upload, appServerUrl) {
  var factory = {};

  factory.imagesAndReroutes = [];

  factory.time = {
    start: new Date(),
    hoursAfterStart: null
  };

  factory.addImageAndReroute = function(imageUrl) {
    var newImageAndReroute = {
      imageUrl: imageUrl || '',
      rerouteUrl: ''
    };

    factory.imagesAndReroutes.push(newImageAndReroute);
  };
  
  var dataToServer = {
    abTestTitle: null,
    campaignId: null, // TODO: Modify from global services
    time: factory.time,
    imagesAndReroutes: factory.imagesAndReroutes
  };

  factory.setCampaignId = function(campaignId) {
    dataToServer.campaignId = campaignId;
  }

  factory.submitImagesAndReroutes = function() {
    console.log('dataToServer', dataToServer);
    console.log('dataToServer.time', dataToServer.time);
    $http.post(
      appServerUrl+'/api/ab_tests',
      dataToServer
    );
  };

  //////////////////////////////////////////////////////
  // For ng-file-upload
  //

  factory.upload = $upload.upload;

  factory.onFileSelect = function($files) {

    console.log('$files:', $files);
    //$files: an array of files selected, each file has name, size, and type.
    for (var i = 0; i < $files.length; i++) {

      var file = $files[i];
      factory.upload = $upload.upload({
      
        url: appServerUrl+'/api/images',
        method: 'POST',
        file: file
      
      }).progress(function(evt) {
      
        // TODO: Make a loading bar for each image
        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      
      }).success(function(data, status, headers, config) {
      
        console.log('data', data);
        console.log('imageUrl', data.imageUrl);
        factory.addImageAndReroute(data.imageUrl);
      
      }).error(function() {

        console.log('onFileSelect: error!');
      
      });

    }

  };

  //
  // End ng-file-upload
  //////////////////////////////////////////////////////

  return factory;
}])

;