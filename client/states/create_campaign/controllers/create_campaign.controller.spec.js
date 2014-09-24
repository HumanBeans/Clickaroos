describe("Unit: CreateCampaignController", function() {
  beforeEach(
    module('clickaroos.createCampaign', function($provide) {
      $provide.constant('appServerUrl', 'http://APP-SERVER-URL-HERE');
      })
  );

  var ctrl, scope;
  // Inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope 
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('CreateCampaignController', {
      $scope: scope
    });
  }));

  // TODO: fix test bug
  it("should have a campaignName string", function() {
    expect(scope.campaignName).to.be.a('string');
  });

  it("should have a createCampaign function", function() {
    expect(scope.createCampaign).to.be.a('function');
  });
});
