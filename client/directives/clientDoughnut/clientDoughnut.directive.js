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
      
      console.log(scope.data);
      
      //populate chartData with properly formatted from scope.data
      for(var key in scope.data.campaign.analytics.email_client) {
        
        chartData.push({
          value: scope.data.campaign.analytics.email_client[key],
          color: scope.data.colors[counter],
          highlight: scope.data.highlights[counter],
          label: key
        });

        counter++;
      }
      
      //charttype-specific configuration options
      options = {
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        percentageInnerCutout : 50,
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false
      };
      
      // set chart dimensions
      ctx.canvas.width = 500;
      ctx.canvas.height= 250;

      var deviceDoughnut = new Chart(ctx).Doughnut(chartData, options, ctx);
    }
  };
}]);
