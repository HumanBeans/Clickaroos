describe("Directive: clientDoughnutDirective", function() {
  var element, scope;

  beforeEach(module('clickaroos.directives.clientDoughnutDirective'));

  beforeEach(inject(function($rootScope, $compile) {
    // element = angular.element('<div ng-model="data" options="options"><div>');
    scope = $rootScope.$new();

    scope.data = [];
    // scope.data.campaign = {};
    // scope.data.campaign.analytics = {};
    // scope.data.campaign.analytics.device = {};
    // scope.data.campaign.analytics.device['iPhone'] = 20;
    // scope.data.campaign.analytics.device['android'] = 30;
    // scope.data.campaign.analytics.device['tablet'] =  10;
    // scope.data.campaign.analytics.device['desktop'] = 40;

    // element = $compile(element)(scope);
    // scope.$digest();
  }));

  it('should have a data object available on the scope', function() {
    expect(Array.isArray(scope.data)).to.be.true;
  });

});
