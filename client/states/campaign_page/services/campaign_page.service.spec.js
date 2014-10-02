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

  it("should have campaignInfo object", function() { 
    expect(CampaignPage.campaignInfo).to.exist;
    expect(CampaignPage.campaignInfo).to.be.a('object');
  });

  it("should have currentApps array", function() { 
    expect(CampaignPage.currentApps).to.exist;
    expect(CampaignPage.currentApps).to.be.a('array');

    CampaignPage.currentApps.forEach(function(currentApp) {
      expect(currentApp).to.have.property('id');
      expect(currentApp).to.have.property('name');
      expect(currentApp).to.have.property('apps');
      expect(currentApp).to.have.property('reports');
    });
  });

});