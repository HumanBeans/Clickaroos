angular.module('clickaroos.abTest')

.factory('AbTest', ['$http', '$upload', 'appServerUrl', function($http, $upload, appServerUrl) {
  var factory = {};

  factory.abTestTitle = null;

  factory.campaignId = null;
  
  factory.time = {
    start: new Date(),
    timeAfterStart: {
      hours: null,
      minutes: null
    }
  };
  
  factory.imagesAndReroutes = [];

  factory.addImageAndReroute = function(imageUrl) {
    var newImageAndReroute = {
      imageUrl: imageUrl || '',
      rerouteUrl: ''
    };

    factory.imagesAndReroutes.push(newImageAndReroute);
  };

  factory.setCampaignId = function(campaignId) {
    factory.campaignId = campaignId;
  }

  factory.submitImagesAndReroutes = function() {
    var dataToServer = {
      abTestTitle: factory.abTestTitle,
      campaignId: factory.campaignId,
      startTime: factory.time.start,
      minsAfterStart: factory.time.timeAfterStart.hours*60 + factory.time.timeAfterStart.minutes,
      imagesAndReroutes: factory.imagesAndReroutes
    };
    console.log('dataToServer', dataToServer);
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