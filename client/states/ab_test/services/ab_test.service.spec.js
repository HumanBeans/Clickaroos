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

  it("should have dataToServer object", function() { 
    expect(AbTest.imagesAndReroutes).to.exist;
    expect(AbTest.imagesAndReroutes).to.be.a('array');
  });

  it("should have submitImagesAndReroutes function", function() { 
    expect(AbTest.submitImagesAndReroutes).to.exist;
    expect(AbTest.submitImagesAndReroutes).to.be.a('function');
  });

});