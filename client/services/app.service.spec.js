describe('Unit: Clickaroos (Services)', function() {

  describe('Unit: Logout', function() {
    var Logout;

    beforeEach(function() {
      module('ui.router');

      module('clickaroos', function($provide) {
        $provide.constant('appServerUrl', 'http://APP-SERVER-URL-HERE');
      });

      inject(function ($injector, _$window_) {
        Logout = $injector.get('Logout');

        $window = _$window_;

        $window.sessionStorage.token ='not deleted';
      
      })
    });

    it('should have a deleteSessionToken function' ,function() {
      expect(Logout.deleteSessionToken).to.be.a('function');
      expect($window.sessionStorage.token).to.equal('not deleted');
      Logout.deleteSessionToken();
      expect($window.sessionStorage.token).to.not.equal('not deleted');
    });

    it('should have a logout function', function() {
      expect(Logout.logout).to.be.a('function');
    });
  });

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

});