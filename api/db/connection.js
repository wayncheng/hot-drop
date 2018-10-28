"use strict";
(function() {
	const mysql = require("mysql");
	const connection = mysql.createConnection(process.env.JAWSDB_URL);
	connection.connect(function(err) {
		if (err) throw err;		
		console.log("mysql connected " + connection.threadId);
	});

	module.exports = connection;
})();
