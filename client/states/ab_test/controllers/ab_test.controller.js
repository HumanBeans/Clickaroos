// abTest requires ui.bootstrap!
angular.module('clickaroos.abTest', ['ui.bootstrap', 'angularFileUpload'])

.controller('AbTestController', ['$scope', 'AbTest', 'appServerUrl', 'campaign_id', function($scope, AbTest, appServerUrl, campaign_id) {

  console.log('campaign_id', campaign_id);
  AbTest.setCampaignId(campaign_id);

  $scope.abTestTitle = AbTest.abTestTitle;
  // Update services' abTestTitle accordingly
  $scope.$watch("abTestTitle", function(newValue, oldValue) {
    AbTest.abTestTitle = $scope.abTestTitle;
    console.log('AbTest.abTestTitle', AbTest.abTestTitle);
  });

  $scope.loading = AbTest.loading;

  $scope.imagesAndReroutes = AbTest.imagesAndReroutes;
  $scope.addImageAndReroute = AbTest.addImageAndReroute;
  $scope.time = AbTest.time;
  $scope.submitImagesAndReroutes = AbTest.submitImagesAndReroutes;
  $scope.productUrls = AbTest.productUrls;
  //////////////////////////////////////////////////////
  // For Angular/Bootstrap Calendar Directive
  //

  $scope.today = function() {
    $scope.mydate = new Date();
  };
  $scope.today();

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.dateChanged = function () {
    var date = $scope.mydate.getDate();
    var month = $scope.mydate.getMonth();
    var year = $scope.mydate.getFullYear();

    $scope.time.start.setDate(date);
    $scope.time.start.setMonth(month);
    $scope.time.start.setYear(year);

    console.log('$scope.time: ', $scope.time);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  //
  // End Angular/Bootstrap Calendar Directive
  //////////////////////////////////////////////////////



  //////////////////////////////////////////////////////
  // For Angular/Bootstrap Timepicker Directive
  //

  // Set AB test start time to be an the next closest hour
  //    Example: current time: 10:21am >> 11:00am
  var displayTime = new Date();
  displayTime.setHours( displayTime.getHours()+1 )
  if( displayTime.getMinutes() !== 0 ) {
    displayTime.setMinutes(0)
  }
  $scope.mytime = displayTime;

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    $scope.mytime = d;
  };

  $scope.timeChanged = function () {
    var hours = $scope.mytime.getHours();
    var minutes = $scope.mytime.getMinutes();

    $scope.time.start.setHours(hours);
    $scope.time.start.setMinutes(minutes);

    console.log('$scope.time: ', $scope.time);
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };

  //
  // End Angular/Bootstrap Timepicker Directive
  //////////////////////////////////////////////////////



  //////////////////////////////////////////////////////
  // For ng-file-upload
  //

  $scope.onFileSelect = AbTest.onFileSelect;
  $scope.upload = AbTest.upload;

  //
  // End ng-file-upload
  //////////////////////////////////////////////////////
  
}])

;