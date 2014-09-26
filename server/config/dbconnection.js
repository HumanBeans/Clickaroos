var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host: 'us-cdbr-azure-west-a.cloudapp.net',
//   user: 'b017f8a5a6d3e8',
//   password: '46c0073d',
//   database: 'ClickagoosDB'
// });

var connection = mysql.createConnection({
  host: 'clickaroosdb.cloudapp.net',
  user: 'Clickaroos',
  password: 'HumanBeans',
  database: 'clickagoosdb'
});

module.exports = connection;

