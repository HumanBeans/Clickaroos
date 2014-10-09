describe('Unit: CampaignList', function() {
  var CampaignList;

  beforeEach(function() {
    module('clickaroos.campaignList', function($provide) {
      $provide.constant('appServerUrl', 'http://APP-SERVER-URL-HERE');
    });

    inject(function ($injector) {
      CampaignList = $injector.get('CampaignList');
    });
  });

  it('should have a getDate function', function() {
    expect(CampaignList.getDate).to.be.a('function');
    expect(CampaignList.getDate('2014-10-09T05:01:39.000Z')).to.be.a('string');
  });

  it('should have a getCampaigns function', function() {
    expect(CampaignList.getCampaigns).to.be.a('function');
    expect(CampaignList.getCampaigns()).to.be.a('object');
  });

});
