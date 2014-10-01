var mysql = require('mysql');

// This DB is for testing Purposes
exports.testingConnection = mysql.createConnection({
  host: 'clickaroosdb.cloudapp.net',
  user: 'Clickaroos',
  password: 'HumanBeans',
  database: 'clickaroosTest'
});

// Main DB
exports.connection = mysql.createConnection({
  host: 'clickaroosdb.cloudapp.net',
  user: 'Clickaroos',
  password: 'HumanBeans',
  database: 'clickagoosdb'
});

// exports.connection = mysql.createConnection({
//   host: 'us-cdbr-azure-west-a.cloudapp.net',
//   user: 'b017f8a5a6d3e8',
//   password: '46c0073d',
//   database: 'clickagoosdb'
// });