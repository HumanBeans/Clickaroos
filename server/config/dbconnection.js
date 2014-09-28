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