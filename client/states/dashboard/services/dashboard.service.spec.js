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

  it('should have a getRecentCampaigns function', function() {
    expect(Dashboard.getRecentCampaigns).to.be.a('function');
    expect(Dashboard.getRecentCampaigns()).to.be.a('object');
  });
});
