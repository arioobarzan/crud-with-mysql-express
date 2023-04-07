var mysql = require('mysql');
require('dotenv')();
var connection = mysql.createConnection({
	host:process.env.host || 'localhost',
	user:process.env.user || 'root',
	password:process.env.password || '',
	database:process.env.database || 'test'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;