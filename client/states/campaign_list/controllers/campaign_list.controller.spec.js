describe('Unit: CampaignListController', function() {
  beforeEach(
    module('clickaroos.campaignList', function($provide) {
      $provide.constant('appServerUrl', 'http://APP-SERVER-URL');
    })
  );

  var ctrl, scope;
  // Inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('CampaignListController', {
      $scope: scope
    });
  }));

  it('should have a user object', function() {
    expect(scope.user).to.be.a('object');
  });

  it('should have a campaigns object', function() {
    expect(scope.campaigns).to.be.a('object');
  });

  it('should have a getCampaign function', function() {
    expect(scope.getCampaign).to.be.a('function');
  });
});
