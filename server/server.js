var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'us-cdbr-azure-west-a.cloudapp.net',
	user: 'b017f8a5a6d3e8',
	password: '46c0073d',
	database: 'ClickagoosDB'
})

connection.connect(function(err){
	if(err) {
		console.error('error', err.stack);
		return;
	}
});
app.listen(3000);
console.log('we made it!')