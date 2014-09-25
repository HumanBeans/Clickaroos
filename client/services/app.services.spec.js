describe("Unit: AuthInterceptor", function() {
  var AuthInterceptor;

  beforeEach(function () {
    module('clickaroos', function($provide) {
      $provide.constant('appServerUrl', 'http://APP-SERVER-URL-HERE');
      });

    inject(function ($injector) {
      AuthInterceptor = $injector.get('AuthInterceptor');
    })
  });

  it('should have a request function', function() {
    expect(AuthInterceptor.request).to.exist;
    expect(AuthInterceptor.request).to.be.a('function');
  });

  it('should have a response function', function() {
    expect(AuthInterceptor.response).to.exist;
    expect(AuthInterceptor.response).to.be.a('function');
  });

});