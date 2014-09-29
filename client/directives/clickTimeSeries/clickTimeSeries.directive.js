angular.module('clickaroos.directives.clickTimeSeriesDirective')

.directive('clickTimeSeriesDirective', [function() {
  return {
    restrict: 'A',
    
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

      charData.labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
      //TODO: CHECK EXPECTED DATA FORMAT FOR LINE CHART
      for(var key in scope.data.campaign.analytics.client){
        chartData.datasets.push({

          // label:,
          // fillColor:,
          // strokeColor:,
          // pointColor:,
          // pointStrokeColor:,
          // pointHighlightFill:,
          // pointHighlightFillStroke:,
          // data:
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
      // var clientDoughnut = new Chart(ctx).Doughnut(chartData, options, ctx);
    }
  };
}]);


//DATA FOR FORMATTING REFERENCE
// var chartData = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//         {
//             label: "My First dataset",
//             fillColor: "rgba(220,220,220,0.2)",
//             strokeColor: "rgba(220,220,220,1)",
//             pointColor: "rgba(220,220,220,1)",
//             pointStrokeColor: "#fff",
//             pointHighlightFill: "#fff",
//             pointHighlightStroke: "rgba(220,220,220,1)",
//             data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//             label: "My Second dataset",
//             fillColor: "rgba(151,187,205,0.2)",
//             strokeColor: "rgba(151,187,205,1)",
//             pointColor: "rgba(151,187,205,1)",
//             pointStrokeColor: "#fff",
//             pointHighlightFill: "#fff",
//             pointHighlightStroke: "rgba(151,187,205,1)",
//             data: [28, 48, 40, 19, 86, 27, 90]
//         }
//     ]
// };