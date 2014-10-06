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

  factory.date;

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

  factory.productUrls = {
    imageUrl: null,
    rerouteUrl: null
  };

  factory.submitImagesAndReroutes = function() {

    // Convert hours and minutes to milliseconds for easier conversion to Date object with 'new Date(milliseconds)'
    var millisecondsAfterStart = (factory.time.timeAfterStart.hours*60 + factory.time.timeAfterStart.minutes)*60*1000;
    
    var dataToServer = {
      abTestTitle: factory.abTestTitle,
      campaignId: factory.campaignId,
      startTime: factory.time.start,
      millisecondsStartTime: factory.time.start.getTime(),
      millisecondsAfterStart: millisecondsAfterStart,
      // Milliseconds to pick winner at for easier conversion to Date object 
      millisecondsPickWinner: factory.time.start.getTime() + millisecondsAfterStart,
      imagesAndReroutes: factory.imagesAndReroutes,
    };

    console.log('dataToServer', dataToServer);

    $http.post(
      appServerUrl+'/api/ab_tests',
      dataToServer
    ).success(function(data, status, headers, config) {
      // TODO: Change global appServerUrl properly
      var appServerUrl = 'http://clickaroos-email-server.azurewebsites.net/';
      console.log('data from submit:', data);
      factory.productUrls.imageUrl = appServerUrl+'/img/ab/'+data.abTestId+'/'+data.emailVar;
      factory.productUrls.rerouteUrl = appServerUrl+'/site/ab/'+data.abTestId+'/'+data.emailVar;
      console.log('factory.productUrls', factory.productUrls);
    });

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