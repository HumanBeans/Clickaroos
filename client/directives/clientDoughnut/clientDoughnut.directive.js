angular.module('clickaroos.directives.clientDoughnutDirective', [])

.directive('clientDoughnutDirective', [function() {
    return {
      restrict: 'A',
      
      scope: {
        //these options bind scope data to attributes on HTML element with directive attached
        data: '=ngModel',
        options: '=',
      },

      link: function(scope, element, attrs) {
        var ctx = element[0].getContext("2d");
        var chartData = [];

        //populate chartData with properly formatted from scope.data
        for(var key in scope.data.analytics.email_client) { 
          chartData.push({
            value: scope.data.analytics.email_client[key].value,
            color: scope.data.analytics.email_client[key].color,
            label: key
          });
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
      }
    };
}]);
