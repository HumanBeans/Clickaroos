angular.module('clickaroos.directives.clientDoughnutDirective', [])

.directive('clientDoughnutDirective', [function() {
    return {
      restrict: 'A',
      
      scope: {
        //these options bind scope data to attributes on HTML element with directive attached
        data: '=data',
        options: '=',
      },

      link: function(scope, element, attrs) {
        var ctx = element[0].getContext("2d");
        var colors = ['#F25F51', '#F5CF32', '#56D9CD', '#3AA1BF', '#9ED960', '#CC1479', '#19E9FF', '#FFDC19'];

        scope.$watch('data', function() {
          render();
        });

        var render = function() {
          var chartData = [];
          var counter = 0;

          //populate chartData with properly formatted from scope.data
          for(var key in scope.data.analytics.email_client) { 
            chartData.push({
              value: scope.data.analytics.email_client[key].value,
              color: scope.data.analytics.email_client[key].color,
              label: key
            });
          }

          // populate colors
          chartData.forEach(function(element, index, array) {
            element.color = colors[counter];
            counter++;
          });
         
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

          var clientDoughnut = new Chart(ctx).Doughnut(chartData, options, ctx);
        };

        render();
      }
    };
}]);
