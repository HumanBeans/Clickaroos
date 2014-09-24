describe('Unit: CreateCampaign', function() {
  var CreateCampaign;
  
  beforeEach(function() {

    module('clickaroos.createCampaign', function($provide) {
      $provide.constant('appServerUrl', 'http://APP-SERVER-URL-HERE');
    });
    
    inject(function ($injector) {
      CreateCampaign = $injector.get('CreateCampaign');
    });
  });

  it('should have a createCampaign function', function() {
    expect(CreateCampaign.createCampaign).to.be.a('function');
  });

});