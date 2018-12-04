'use strict';
(function() {
	const mysql = require('mysql');
	let connection = mysql.createConnection({
		host    : process.env.DEV_DB_HOST,
		user    : process.env.DEV_DB_USER,
		password: process.env.DEV_DB_PASSWORD,
		database: process.env.DEV_DB_NAME,
	});
	let environment = process.env.NODE_ENV || 'dev';

	if (process.env.NODE_ENV === 'production') {
		connection = mysql.createConnection(process.env.JAWSDB_URL);
	}

	connection.connect(function(err) {
		if (err) throw err;
		console.log(`mysql connected ${connection.threadId} (${environment})`);
		// console.log(environment);
	});

	module.exports = connection;
})();
