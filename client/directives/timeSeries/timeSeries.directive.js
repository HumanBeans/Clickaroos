angular.module('clickaroos.directives.timeSeriesDirective', [])

.directive('timeSeriesDirective', [function() {
  return {
    restrict: 'A',
    
    scope: {
      // these options bind scope data to attributes on HTML element with directive attached
      data: '=ngModel',
      options: '=',
    },

    link: function(scope, element, attrs) {
      var chartData = [];
      
      // TODO: NEED THESE???
      var ctx = element[0].getContext("2d");
      var counter = 0;
      
      chartData.labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];

      chartData.datasets = [];

      
      // populate chartData with properly formatted from scope.data
      // clicks
      chartData.datasets.push({
          label: 'Clicks',
          fillColor: scope.data.campaign.analytics.rawData.clicks.color + '0.2)',
          strokeColor: scope.data.campaign.analytics.rawData.clicks.color + '1)',
          pointColor: scope.data.campaign.analytics.rawData.clicks.color + '1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightFillStroke: scope.data.campaign.analytics.rawData.clicks.color + '1)',
          data: scope.data.campaign.analytics.rawData.clicks.data
        });

      // opens
      chartData.datasets.push({
        label: 'Opens',
        fillColor: scope.data.campaign.analytics.rawData.opens.color + '0.2)',
        strokeColor: scope.data.campaign.analytics.rawData.opens.color + '1)',
        pointColor: scope.data.campaign.analytics.rawData.opens.color + '1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightFillStroke: scope.data.campaign.analytics.rawData.opens.color + '1)',
        data: scope.data.campaign.analytics.rawData.opens.data
      });

      // charttype-specific configuration options
      options = {
        /// Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : true,

        /// String - Colour of the grid lines
        scaleGridLineColor : "rgba(0,0,0,.05)",

        /// Number - Width of the grid lines
        scaleGridLineWidth : 1,

        /// Boolean - Whether the line is curved between points
        bezierCurve : false,

        /// Number - Tension of the bezier curve between points
        bezierCurveTension : 0.4,

        /// Boolean - Whether to show a dot for each point
        pointDot : true,

        /// Number - Radius of each point dot in pixels
        pointDotRadius : 4,

        /// Number - Pixel width of point dot stroke
        pointDotStrokeWidth : 1,

        /// Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius : 20,

        /// Boolean - Whether to show a stroke for datasets
        datasetStroke : true,

        /// Number - Pixel width of dataset stroke
        datasetStrokeWidth : 2,

        /// Boolean - Whether to fill the dataset with a colour
        datasetFill : true,
      };

      // set chart dimensions
      // ctx.canvas.width = 650;
      ctx.canvas.width = document.getElementById('time-chart').offsetWidth - 60;
      ctx.canvas.height= 200;
      
      var myLineChart = new Chart(ctx).Line(chartData, options);
    }
  };
}]);
