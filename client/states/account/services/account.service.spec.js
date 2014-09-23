describe("Unit: Account", function() {
	var Account;

	beforeEach(function () {
		module('clickaroos.account', function($provide) {
			$provide.constant('appServerUrl', 'http://APP-SERVER-URL-HERE');
			});

		inject(function ($injector) {
			Account = $injector.get('Account');
		})
	});

  it("should have a login function", function() { 
  	expect(Account.submitLogin).to.be.a('function');
  });

  it("should have a signup function", function() { 
  	expect(Account.submitSignup).to.be.a('function');
  });
});