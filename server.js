'use strict';

(function() {
	// DEPENDENCIES ===================================
	// const methodOverride = require("method-override");
	const express = require('express');
	const bodyParser = require('body-parser');
	const path = require('path');
	const chalk = require('chalk');
	require('dotenv').config();
	// const extIP = require('external-ip');

	// CONFIG =======================================
	const app = express();
	const PORT = process.env.PORT || 5000;
	app.disable('x-powered-by');

	// Set Body Parser
	app.use(bodyParser.json());
	app.use(bodyParser.text());
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(bodyParser.json({type: 'application/vnd.api+json'}));

	// Sets access control headers
	app.use((req, res, next) => {
		console.log('url : ' + req.url);
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

		// 	let getIP = extIP({
		// 		replace: true,
		// 		services: ['http://ifconfig.co/x-real-ip', 'http://ifconfig.io/ip'],
		// 		timeout: 600,
		// 		getIP: 'parallel',
		// 		userAgent: 'Chrome 15.0.874 / Mac OS X 10.8.1'
		// });
		// 		getIP((err, ip) => {
		// 				if (err) {
		// 						// every service in the list has failed
		// 						throw err;
		// 				}
		// 				console.log(ip);
		// 		});

		next();
	});

	// API Routes
	const apiRoutes = require('./api/api-controller');
	app.use('/api', apiRoutes);

	// Route to serve gzipped bundle.js file.
	// IMPORTANT: This NEEDS to be higher-priority than the static route
	if (process.env.NODE_ENV === 'production') {
		// app.get("*/bundle.js", function(req, res, next) {
		// 	req.url = req.url + ".gz";
		// 	res.set("Content-Encoding", "gzip");
		// 	res.set("Content-Type", "text/javascript");
		// 	next();
		// });
		// Serve any static files
		app.use(express.static(path.join(__dirname, 'client/build')));

		// Handle React routing, return all requests to React app
		app.get('*', function(req, res) {
			res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
		});
	}

	// Set Static Directory
	// app.use(express.static(path.join(__dirname,'client',"public")));

	// Basic HTML gets (Handled by ReactRouter)
	// const routes = require("./controllers/basic-controller");
	// app.use("/", routes);

	// Default React route
	// app.get("*", (req, res, next) => {
	// 	res.sendFile(path.join(__dirname, "./client/public/index.html"));
	// });

	// CONNECT TO DATABASE =================================
	const {sequelize} = require('./api/db/connection.js');
	sequelize
		.authenticate()
		.then(() => {
			console.log('[DB] connected');
		})
		.catch(err => {
			console.error('[DB] Unable to connect to the database:', err);
		});

	// START SERVER ===================================
	const server = app.listen(PORT, () => {
		console.log(`\n\n\n${new Date().toLocaleString()}`)
		console.log(chalk.white(`======================================================`));
		console.log(`[SERVER] listening to port ${chalk.yellow(PORT)}`);
	});

	module.exports = server; // Export for testing
})();
