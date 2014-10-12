angular.module('clickaroos.directives.imageBarGraphDirective', [])

.directive('imageBarGraphDirective', [function() {
  return {
    restrict: 'A',
    
    scope: {
      // these options bind scope data to attributes on HTML element with directive attached
      data: '=data',
      options: '=',
    },

    link: function(scope, element, attrs) {
      var chartData = [];
      var ctx = element[0].getContext("2d");
      var counter = 0;

      scope.$watch('data', function() {
        render();
      });
      
      var render = function() {
        chartData.labels = []
        chartData.datasets = [];

        chartData.datasets.push({
          label: 'Opens',
          fillColor: 'rgba(255,254,0,0.5)',
          strokeColor: 'rgba(255,254,0,0.8)',
          highlightFill: 'rgba(255,254,0,0.75)',
          highlightStroke: 'rgba(255,254,0,1)',
          data: []
        },
        {
          label: 'Clicks',
          fillColor: 'rgba(0,177,232,0.5)',
          strokeColor: 'rgba(0,177,232,0.8)',
          highlightFill: 'rgba(0,177,232,0.75)',
          highlightStroke: 'rgba(0,177,232,1)',
          data: []
        });

        // populate chartData with properly formatted from scope.data
        for (var key in scope.data) {
          if (key !== 'winner') {
            chartData.labels.push(key);
            chartData.datasets[0].data.push(scope.data[key].opens);
            chartData.datasets[1].data.push(scope.data[key].clicks);
          }
        }       

        // charttype-specific configuration options
        options = {
          scaleBeginAtZero : true,
          scaleShowGridLines : true,
          scaleGridLineColor : "rgba(0,0,0,.05)",
          scaleGridLineWidth : 1,
          barShowStroke : true,
          barStrokeWidth : 2,
          barValueSpacing : 5,
          barDatasetSpacing : 1,
        };

        ctx.canvas.width = document.getElementById('time-chart').offsetWidth - 60;
        ctx.canvas.height= 200;

        var myBarChart = new Chart(ctx).Bar(chartData, options);      
      };

      render();
    }
  };
}]);