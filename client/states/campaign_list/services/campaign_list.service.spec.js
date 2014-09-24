describe('Unit: CampaignList', function() {
  var CampaignList;

  beforeEach(function() {
    module('clickaroos.campaignList',function($provide) {
        $provide.constant('appServerUrl', 'http://APP-SERVER-URL-HERE');
    });

    inject(function ($injector) {
      CampaignList = $injector.get('CampaignList');
    });
  });

  // TODO: getCampaigns function should be on global campaign model controller and services
});
