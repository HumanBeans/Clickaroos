describe("Unit: CampaignPageController", function() {
  var ctrl, scope;

  beforeEach(function() {

    module('ui.router');
    
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
        $scope: scope,
        campaign_id: 5
      });
    });
    
  });

});