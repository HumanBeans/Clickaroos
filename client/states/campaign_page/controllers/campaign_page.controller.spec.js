describe("Unit: CampaignPageController", function() {
  var ctrl, scope;

  beforeEach(function() {

    module('clickaroos.campaignPage', function($provide) {
      $provide.constant('appServerUrl', 'http://APP-SERVER-URL-HERE');
    });

    // Inject the $controller and $rootScope services
    // in the beforeEach block
    inject(function($controller, $rootScope) {
      // Create a new scope that's a child of the $rootScope 
      scope = $rootScope.$new();
      // Create the controller
      ctrl = $controller('CampaignPageController', {
        $scope: scope
      });
    });
    
  });

  it("'campaign' should be an object", function() {
    expect(scope.campaignInfo).to.exist;
    expect(scope.campaignInfo).to.be.a('object');
  });

  it("'currentApps' should be an array", function() { 
    expect(scope.currentApps).to.exist;
    expect(scope.currentApps).to.be.a('array');
  });

});