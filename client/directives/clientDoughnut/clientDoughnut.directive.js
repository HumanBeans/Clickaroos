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
      var counter = 0;
      var chartData = [];

      //populate chartData with properly formatted from scope.data
      for(var key in scope.data.campaign.analytics.email_client) {
        
        chartData.push({
          value: scope.data.campaign.analytics.email_client[key].value,
          color: scope.data.campaign.analytics.email_client[key].color,
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
      ctx.canvas.width = 350;
      ctx.canvas.height= 200;

      var deviceDoughnut = new Chart(ctx).Doughnut(chartData, options, ctx);
    }
  };
}]);
