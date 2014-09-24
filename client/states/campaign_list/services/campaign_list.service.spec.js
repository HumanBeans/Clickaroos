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

  it('should have a getCampaign function', function() {
    expect(CampaignList.getCampaign).to.be.a('function');
  });

});