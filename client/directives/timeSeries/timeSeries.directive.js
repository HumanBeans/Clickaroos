angular.module('clickaroos.directives.timeSeriesDirective', [])

.directive('timeSeriesDirective', [function() {
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

      // console.log('times series scope.data: ', scope.data);

      scope.$watch('data', function() {
        render();
      });
      

      var render = function() {
        chartData.labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];

        chartData.datasets = [];

        // populate chartData with properly formatted from scope.data

        // clicks
        chartData.datasets.push({
            label: 'Clicks',
            fillColor: scope.data.rawData.clicks.color + '0.2)',
            strokeColor: scope.data.rawData.clicks.color + '1)',
            pointColor: scope.data.rawData.clicks.color + '1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightFillStroke: scope.data.rawData.clicks.color + '1)',
            data: scope.data.rawData.clicks.data
          });

        // opens
        chartData.datasets.push({
          label: 'Opens',
          fillColor: scope.data.rawData.opens.color + '0.2)',
          strokeColor: scope.data.rawData.opens.color + '1)',
          pointColor: scope.data.rawData.opens.color + '1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightFillStroke: scope.data.rawData.opens.color + '1)',
          data: scope.data.rawData.opens.data
        });

        // charttype-specific configuration options
        options = {
          scaleShowGridLines : true,
          scaleGridLineColor : "rgba(0,0,0,.05)",
          scaleGridLineWidth : 1,
          bezierCurve : false,
          bezierCurveTension : 0.4,
          pointDot : true,
          pointDotRadius : 4,
          pointDotStrokeWidth : 1,
          pointHitDetectionRadius : 20,
          datasetStroke : true,
          datasetStrokeWidth : 2,
          datasetFill : true,
        };

        ctx.canvas.width = document.getElementById('time-chart').offsetWidth - 60;
        ctx.canvas.height= 200;

        var myLineChart = new Chart(ctx).Line(chartData, options);      
      };

      render();
    }
  };
}]);
