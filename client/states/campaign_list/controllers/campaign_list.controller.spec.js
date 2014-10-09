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
      $scope: scope,
      campaign_id: 0
    });
  }));

  it('should have a getDate function', function() {
    expect(scope.getDate).to.be.a('function');
  });
  
  // TODO: getCampaigns function should be on global campaign model controller and services
});
