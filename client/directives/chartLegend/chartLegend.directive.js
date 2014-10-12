angular.module('clickaroos.directives.chartLegendDirective', [])

.directive('chartLegendDirective', [function() {
  return {
    restrict: 'E',
    
    scope: {
      // these options bind scope data to attributes on HTML element with directive attached
      data: '=data',
      // options: '=',
    },
    templateUrl: 'chartLegend.directive.template.html', 

    link: function(scope, element, attrs) {
      
    }
  };
}]);