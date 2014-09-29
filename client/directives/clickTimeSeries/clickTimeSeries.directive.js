angular.module('clickaroos.directives')

.directive('clickTimeSeriesDirective', [function() {
  return {
    restrict: 'EA',
    
    scope: {
      //these options bind scope data to attributes on HTML element with directive attached
      data: '=ngModel',
      options: '=',
    },

    link: function(scope, element, attrs) {
      var chartData = [];
      
      //TODO: NEED THESE???
      var ctx = element[0].getContext("2d");
      var counter = 0;
      //populate chartData with properly formatted from scope.data

      //TODO: CHECK EXPECTED DATA FORMAT FOR LINE CHART
      for(var key in scope.data.campaign.analytics.client){
        chartData.push({
          value: scope.data.campaign.analytics.client[key],
          color: scope.data.colors[counter],
          highlight: scope.data.highlights[counter],
          label: key
        });
        counter++;
      }
      
      //charttype-specific configuration options

      //TODO: INPUT EXPECTED OPTIONS FOR LINE CHART
      options = {
        
      };
      
      // set chart dimensions
      ctx.canvas.width = 500 ;
      ctx.canvas.height= 250;
      var clientDoughnut = new Chart(ctx).Doughnut(chartData, options, ctx);
    }
  };
}]);