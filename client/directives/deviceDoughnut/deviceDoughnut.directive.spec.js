describe("Directive: deviceDoughnutDirective", function() {
  var element, scope;

  beforeEach(module('clickaroos.directives.deviceDoughnutDirective'));

  beforeEach(inject(function($rootScope, $compile) {
    // element = angular.element('<div ng-model="data" options="options"><div>');
    scope = $rootScope.$new();

    scope.data = [];
    // scope.data.campaign = {};
    // scope.data.campaign.analytics = {};
    // scope.data.campaign.analytics.device = {};
  }));

  it('should have a data object available on the scope', function() {
    expect(Array.isArray(scope.data)).to.be.true;
  });

});
