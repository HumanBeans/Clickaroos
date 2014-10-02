describe('Unit: AbTest', function() {
  var AbTest;

  beforeEach(function () {

    module('clickaroos.abTest', function($provide) {
      $provide.constant('appServerUrl', 'http://APP-SERVER-URL-HERE');
    });

    inject(function ($injector) {
      AbTest = $injector.get('AbTest');
    });

  });

  it('should have abTestTitle initialized to null', function() {
    expect(AbTest.abTestTitle).to.equal(null);
  });

  it('should have campaignId initialized to null', function() {
    expect(AbTest.campaignId).to.equal(null);
  });

  it('should have time object', function() { 
    expect(AbTest.time).to.exist;
    expect(AbTest.time).to.be.a('object');
    expect(AbTest.time).to.have.property('start');
    expect(AbTest.time).to.have.property('timeAfterStart');
    expect(AbTest.time.timeAfterStart).to.have.property('hours');
    expect(AbTest.time.timeAfterStart).to.have.property('minutes');    
  });

  it('should have imagesAndReroutes array', function() { 
    expect(AbTest.imagesAndReroutes).to.exist;
    expect(AbTest.imagesAndReroutes).to.be.a('array');
  });

  it('should have addImageAndReroute function', function() { 
    expect(AbTest.addImageAndReroute).to.exist;
    expect(AbTest.addImageAndReroute).to.be.a('function');
    AbTest.addImageAndReroute();
    expect(AbTest.imagesAndReroutes).to.have.length(1);
  });

  it('should have a setCampaignId function', function() {
    expect(AbTest.setCampaignId).to.be.a('function');
    AbTest.setCampaignId(222);
    expect(AbTest.campaignId).to.equal(222);
  });

  it('should have a productUrls object', function() {
    expect(AbTest.productUrls).to.be.a('object');
    expect(AbTest.productUrls).to.have.property('imageUrl');
    expect(AbTest.productUrls).to.have.property('rerouteUrl');
  });

  it('should have submitImagesAndReroutes function', function() { 
    expect(AbTest.submitImagesAndReroutes).to.exist;
    expect(AbTest.submitImagesAndReroutes).to.be.a('function');
  });

  describe('ng-file-upload directive', function() {

    it('should have an upload function', function() {
      expect(AbTest.upload).to.be.a('function');
    });

    it('should have an onFileSelect function', function() {
      expect(AbTest.onFileSelect).to.be.a('function');
    });

  });

});