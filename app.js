var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'us-cdbr-azure-west-a.cloudapp.net',
	user: 'b017f8a5a6d3e8',
	password: '46c0073d',
	database: 'ClickagoosDB'
})

connection.connect();

// C: The .query() below is to test if the server is connecting to the remote db correctly  
connection.query(
	"insert into users (user_name, password, email, phone, credit_card) values ('armando1', 'armando1', 'aaa1@aaa.com', 155515523, 456)",
	function( err ){
		if( err ) throw err;
		else console.log( "Pretty sure insert worked" );
	}
);

var port = process.env.PORT || 3000;

app.listen(port);
console.log('we made it!')