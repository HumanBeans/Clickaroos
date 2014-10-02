describe('Unit: AbTestController', function() {
  var ctrl, scope;

  beforeEach(function() {

    module('clickaroos.abTest', function($provide) {
      $provide.constant('appServerUrl', 'http://APP-SERVER-URL-HERE');
      $provide.constant('campaign_id', 0);
    });

    // Inject the $controller and $rootScope services
    // in the beforeEach block
    inject(function($controller, $rootScope) {
      // Create a new scope that's a child of the $rootScope 
      scope = $rootScope.$new();
      // Create the controller
      ctrl = $controller('AbTestController', {
        $scope: scope
      });
    });
    
  });

  it('should have abTestTitle', function() {
    expect('scope.abTestTitle').to.exist;
  });

  it('should have an imagesAndReroutes array', function() {
    expect(scope.imagesAndReroutes).to.exist;
    expect(scope.imagesAndReroutes).to.be.a('array');
  });

  it('should have a addImageAndReroute function', function() {
    expect(scope.addImageAndReroute).to.exist;
    expect(scope.addImageAndReroute).to.be.a('function');
  });

  it('should be a time object', function() {
    expect(scope.time).to.exist;
    expect(scope.time).to.be.a('object');
  });

  it('should have a submitImagesAndReroutes function', function() {
    expect(scope.submitImagesAndReroutes).to.exist;
    expect(scope.submitImagesAndReroutes).to.be.a('function');
  });

  it('should have a productUrls object', function() {
    expect(scope.productUrls).to.be.a('object');
  });

  it('should have an Angular/Bootstrap timepicker directive', function() {
    expect(scope.mytime).to.be.a('date');
    expect(scope.mstep).to.be.a('number');
    expect(scope.hstep).to.be.a('number');

    expect(scope.options).to.be.a('object');
    expect(scope.options).to.have.property('hstep');
    expect(scope.options.hstep).to.be.a('array');
    expect(scope.options).to.have.property('mstep');
    expect(scope.options.mstep).to.be.a('array');

    expect(scope.ismeridian).to.be.a('boolean');

    expect(scope.update).to.be.a('function');

    expect(scope.changed).to.be.a('function');
    scope.changed();
    expect(scope.time.start).to.not.equal('');

    expect(scope.clear).to.be.a('function');
    scope.clear();
    expect(scope.mytime).to.equal(null);
  });

  describe('ng-file-upload directive', function() {

    it('should have an upload function', function() {
      expect(scope.upload).to.be.a('function');
    });

    it('should have an onFileSelect function', function() {
      expect(scope.onFileSelect).to.be.a('function');
    });

  });

});