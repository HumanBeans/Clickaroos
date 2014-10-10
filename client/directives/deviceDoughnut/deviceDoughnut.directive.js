angular.module('clickaroos.directives.deviceDoughnutDirective', [])

.directive('deviceDoughnutDirective', [function() {
  return {
    restrict: 'A',
    
    scope: {
      //these options bind scope data to attributes on HTML element with directive attached
      data: '=ngModel',
      options: '=',
    },

    link: function(scope, element, attrs) {
      scope.$on('dataReady', function() {
        console.log('device doughnut directive');

        var ctx = element[0].getContext("2d");
        var counter = 0;
        var chartData = [];

        //populate chartData with properly formatted from scope.data
        for(var key in scope.data.campaign.analytics.device){
          
          chartData.push({
            value: scope.data.campaign.analytics.device[key].value,
            color: scope.data.campaign.analytics.device[key].color,
            label: key
          });
        counter++;
      }
      
      //charttype-specific configuration options
      options = {
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        percentageInnerCutout : 40,
        animationSteps : 80,
        animationEasing : "easeOutQuart",
        animateRotate : true,
        animateScale : false
      };
      
      // set chart dimensions
      ctx.canvas.width = 200;
      ctx.canvas.height= 200;

        var deviceDoughnut = new Chart(ctx).Doughnut(chartData, options, ctx);
      });
    }
  };
}]);
