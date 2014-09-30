describe('Unit: CreateCampaign', function() {
  var CreateCampaign;
  
  beforeEach(function() {

    module('ui.router');

    module('clickaroos.createCampaign', function($provide) {
      $provide.constant('appServerUrl', 'http://APP-SERVER-URL-HERE');
    });
    
    inject(function ($injector) {
      CreateCampaign = $injector.get('CreateCampaign');
    });
  });

  it('should have a campaignInfo object', function() {
    expect(CreateCampaign.campaignInfo).to.be.a('object');
    expect(CreateCampaign.campaignInfo.campaign_title).to.be.a('string');
  });

  it('should have a createCampaign function', function() {
    expect(CreateCampaign.createCampaign).to.be.a('function');
  });

});
