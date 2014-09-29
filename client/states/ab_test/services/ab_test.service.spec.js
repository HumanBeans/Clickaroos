describe("Unit: AbTest", function() {
  var AbTest;

  beforeEach(function () {

    module('clickaroos.abTest', function($provide) {
      $provide.constant('appServerUrl', 'http://APP-SERVER-URL-HERE');
    });

    inject(function ($injector) {
      AbTest = $injector.get('AbTest');
    });

  });

  it("should have imagesAndReroutes array", function() { 
    expect(AbTest.imagesAndReroutes).to.exist;
    expect(AbTest.imagesAndReroutes).to.be.a('array');
  });

  it("should have time object", function() { 
    expect(AbTest.time).to.exist;
    expect(AbTest.time).to.be.a('object');
  });

  it("should have addImageAndReroute function", function() { 
    expect(AbTest.addImageAndReroute).to.exist;
    expect(AbTest.addImageAndReroute).to.be.a('function');
  });

  it("should have submitImagesAndReroutes function", function() { 
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