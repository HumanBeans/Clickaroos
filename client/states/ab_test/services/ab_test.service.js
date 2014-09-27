angular.module('clickaroos.abTest')

.factory('AbTest', ['$http', '$upload', 'appServerUrl', function($http, $upload, appServerUrl) {
  var factory = {};

  factory.imagesAndReroutes = [];
  factory.time = { start: '' };

  // Create a new object for every new added image
  // var newImageAndReroute = function(image_url) {
  //   return {
  //     image_url: image_url || '',
  //     reroute_url: ''
  //   };
  // };

  factory.addImageAndReroute = function(image_url) {
    var newImageAndReroute = {
      image_url: image_url || '',
      reroute_url: ''
    };

    factory.imagesAndReroutes.push(newImageAndReroute);
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

  //////////////////////////////////////////////////////
  // For Angular/Bootstrap Timepicker Directive
  //

  factory.mytime = new Date();

  factory.hstep = 1;
  factory.mstep = 15;

  factory.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  factory.ismeridian = true;
  factory.toggleMode = function() {
    factory.ismeridian = ! factory.ismeridian;
  };

  factory.update = function() {
    var d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    factory.mytime = d;
  };

  factory.changed = function () {
    factory.time.start = factory.mytime;
    console.log(factory.time);
  };

  factory.clear = function() {
    factory.mytime = null;
  };

  //
  // End Angular/Bootstrap Timepicker Directive
  //////////////////////////////////////////////////////

  return factory;
}])

;