describe("Unit: AccountController", function() {
	var ctrl, scope;

  beforeEach(function() {

		module('clickaroos.account', function($provide) {
			$provide.constant('appServerUrl', 'http://APP-SERVER-URL-HERE');
		});

    module('clickaroos');

    module('ui.router')

    // Inject the $controller and $rootScope services
    // in the beforeEach block
    inject(function($controller, $rootScope) {
      // Create a new scope that's a child of the $rootScope 
      scope = $rootScope.$new();
      // Create the controller
      ctrl = $controller('AccountController', {
        $scope: scope
      });
    });
    
	});

  it("should have a user object", function() { 
    expect(scope.user).to.be.a('object');
  });  

  it("should have a loginView boolean", function() { 
  	expect(scope.loginView).to.be.a('boolean');
  });

  it("user object should contain username and password properties", function() { 
  	expect(scope.user).to.have.property('username');
  	expect(scope.user).to.have.property('password');
  });

  it("should have a login and signup function", function() { 
  	expect(scope.submitLogin).to.be.a('function');
  	expect(scope.submitSignup).to.be.a('function');
  });
});