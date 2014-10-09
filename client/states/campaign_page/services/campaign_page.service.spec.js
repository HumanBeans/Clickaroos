describe("Unit: CampaignPage", function() {
  var CampaignPage;

  beforeEach(function () {
    
    module('ui.router');

    module('clickaroos.campaignPage', function($provide) {
      $provide.constant('appServerUrl', 'http://APP-SERVER-URL-HERE');
    });

    inject(function ($injector) {
      CampaignPage = $injector.get('CampaignPage');
    });

  });

});