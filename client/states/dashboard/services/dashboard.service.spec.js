describe('Unit: Dashboard', function() {
  var CampaignList;

  beforeEach(function() {
    module('clickaroos.dashboard',function($provide) {
        $provide.constant('appServerUrl', 'http://APP-SERVER-URL-HERE');
    });

    inject(function ($injector) {
      Dashboard = $injector.get('Dashboard');
    });
  });

  // TODO: getCampaigns function should be on global campaign model controller and services
});
