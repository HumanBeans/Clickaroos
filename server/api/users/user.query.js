'use strict'

var dbConnection = require('../../config/dbconnection').connection;
var config = require('../../config/main.js');
var bcrypt = require('bcrypt-nodejs');
var Q = require('q');
// var app = require('../../server');
// var bookshelf = app.get('bookshelf');
var bookshelf = require('../../config/dbconfig');

var User = bookshelf.Model.extend({
  tableName: 'users'
});

// var dbConnection = mysql.createConnection(config.dbConnectionString);
// var dbConnection = mysql.createConnection(config.dbConnectionStringLocal);
// dbConnection.connect();

// exports.findByEmail = function(email, callback){
//   var queryString = 'SELECT * FROM users WHERE email = ?';
//   dbConnection.query(queryString,[email], function(err,user){
//     callback(err, user[0]);
//   });
// };

exports.findByEmail = function(email, callback){
  User.where({email: email})
    .fetch()
    .then(function(user){
      // console.log('***********NOERRR');
      callback(undefined, user.attributes);
    })
    .catch(function(err){
      // console.log('***********errrr');
      callback(err);
    });
};

// exports.findById = function(id, callback){
//   var queryString = 'SELECT * FROM users WHERE user_id = ?';
//   dbConnection.query(queryString, [id], function(err, user){
//     callback(err, user[0]);
//   });
// };

exports.findById = function(id, callback){
  User.where({user_id:id})
    .fetch()
    .then(function(user){
      callback(undefined, user.attributes)
    })
    .catch(function(err){
      callback(err);
    });
};

// exports.findAllUsers = function(callback){
//   var queryString = 'SELECT * FROM users';
//   dbConnection.query(queryString, callback);
// };

exports.findAllUsers = function(callback){
  User.collection()
    .fetch()
    .then(function(users){
      callback(undefined, users.models)
    })
    .catch(function(err){
      callback(err);
    });
};

exports.getProfile = function(id, callback){
  var queryString = 'SELECT * FROM users WHERE user_id = ?';
  dbConnection.query(queryString, [id], function(err, user){
    // console.log('******', user[0]);
    delete user[0].password;
    callback(err, user[0]);
  })
}

// exports.save = function(userObj, callback){
//   var password = userObj.password;
//   var queryString = 'INSERT INTO users SET ?';

//   //if email not provided, set the email the same as username for now, assuming the user are using email to login
//   if(!userObj.email){
//     userObj.email = userObj.username;
//   }

//   exports.findByEmail(userObj.email, function(err, user){
//     if(user) {
//       //do not return user password
//       delete user.password;
//       callback(user);
//     }
//     else{
//       bcrypt.genSalt(10, function(err,salt){
//         bcrypt.hash(password, salt, null, function(err,hash){
//           userObj.password = hash;
//           dbConnection.query(queryString, [userObj], callback);
//         });
//       });
//     }
//   });
// };

exports.save = function(userObj, callback){
  var password = userObj.password;

  //if email not provided, set the email the same as username for now, assuming the user are using email to login
  if(!userObj.email){
    userObj.email = userObj.username;
  }

  exports.findByEmail(userObj.email, function(err, user){
    if(user) {
      //do not return user password
      delete user.password;
      callback(user);
    }
    else{
      bcrypt.genSalt(10, function(err,salt){
        bcrypt.hash(password, salt, null, function(err,hash){
          userObj.password = hash;
          User.forge(userObj).save()
            .then(function(user){
              callback(undefined, user.attributes);
            })
            .catch(function(err){
              callback(err);
            })

        });
      });
    }
  });
};

//authentication function
//use the synchronous version of compare function for now, to be refactored later
// exports.authenticate = function(email, password){
//   var deferred = Q.defer();
//   exports.findByEmail(email,function(err,user){
//     if(!user){
//       return deferred.resolve(false);
//     }
//     bcrypt.compare(password, user.password, function(err, res){
//       if(err){
//         deferred.reject(new Error(err));
//       }else{
//         deferred.resolve(res,user);
//       }
//     });
//   });
//   return deferred.promise;
// };

exports.authenticate = function(email, password){
  var deferred = Q.defer();
  exports.findByEmail(email,function(err,user){
    if(!user){
      return deferred.resolve(false);
    }
    bcrypt.compare(password, user.password, function(err, res){
      if(err){
        deferred.reject(new Error(err));
      }else{
        deferred.resolve(res,user);
      }
    });
  });
  return deferred.promise;
};
