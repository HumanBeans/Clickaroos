'use strict'

var chai = require('chai');
var should = chai.should();
var User = require('./user.query');


describe('user test', function(){
  // beforeEach(function(done){
  //   done();
  // })

  var testUser = {
    user_id: 61,
    user_name: "testuser",
    email: "123@123.com" 
  }
  // before(function(done){
  //   done();
  // });

  // after(function(done){
  //   console.log('yo');
  //   done();
  // })
  
  it('should have findByEmail and findById method', function(done){
    User.should.have.property('findByEmail');
    User.should.have.property('findById');
    done();
  });

  it('should find a user using findByEmail', function(done){
    User.findByEmail(testUser.email, function(err, user){
      user.user_name.should.equal(testUser.user_name);
    });
    done();
  });

  it('should find a user using findById', function(done){
    User.findById(testUser.user_id, function(err, user){
      user.user_name.should.euqal(testUser.user_name);
    });
    done();
  })
});