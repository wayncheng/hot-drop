'use strict';
(function() {
	const Sequelize = require('sequelize');
	const { Markers, Paths, } = require('./models');
	const HOST = process.env.DEV_DB_HOST;
	const PASSWORD = process.env.DEV_DB_PASSWORD;
	const USERNAME = process.env.DEV_DB_USER;
	const DATABASE = process.env.DEV_DB_NAME;
	let environment = process.env.NODE_ENV || 'dev';
	
	let sequelize;
	
	if (environment === 'production') {
		sequelize = new Sequelize(process.env.JAWSDB_URL);
	} else {
		sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
			host: HOST,
			dialect: 'mysql',
			operatorsAliases: false,
			pool: {
				max: 5,
				min: 0,
				acquire: 30000,
				idle: 10000
			},
			define: {
				timestamps: false,
			},
			logging: false,
		});
	}

	const db = {
		Sequelize,
		sequelize,
		Paths: Paths(sequelize),
		Markers: Markers(sequelize),
	}

	// db.Suites.hasMany(db.Runs)

	module.exports = db;
})();


// 'use strict';
// (function() {
// 	const mysql = require('mysql');
// 	let connection = mysql.createConnection({
// 		host    : process.env.DEV_DB_HOST,
// 		user    : process.env.DEV_DB_USER,
// 		password: process.env.DEV_DB_PASSWORD,
// 		database: process.env.DEV_DB_NAME,
// 	});
// 	let environment = process.env.NODE_ENV || 'dev';

// 	if (environment === 'production') {
// 		connection = mysql.createConnection(process.env.JAWSDB_URL);
// 	}

// 	connection.connect(function(err) {
// 		if (err) throw err;
// 		console.log(`mysql connected (${environment})`);
// 	});

// 	module.exports = connection;
// })();

