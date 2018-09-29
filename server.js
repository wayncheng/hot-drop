"use strict";

(function() {
	// DEPENDENCIES ===================================
	// const methodOverride = require("method-override");
	const express = require("express");
	const bodyParser = require("body-parser");
	const path = require("path");
	require("dotenv").config();

	// CONFIG =======================================
	const app = express();
	const PORT = process.env.PORT || 3000;
	app.disable("x-powered-by");

	// Set Body Parser
	app.use(bodyParser.json());
	app.use(bodyParser.text());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json({ type: "application/vnd.api+json" }));

	// Sets access control headers
	// logs each url that is requested, then passes it on.
	app.use( (req, res, next) => {
		console.log("url : " + req.url);
		res.header('Access-Control-Allow-Origin', '*')
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
		next();
	});

	// Route to serve gzipped bundle.js file.
	// IMPORTANT: This NEEDS to be higher-priority than the static route
	if (process.env.NODE_ENV === 'production') {
		app.get("*/bundle.js", function(req, res, next) {
			req.url = req.url + ".gz";
			res.set("Content-Encoding", "gzip");
			res.set("Content-Type", "text/javascript");
			next();
		});
	}

	// Set Static Directory
	// app.use(express.static(path.join(__dirname, "public")));
	
	// API Routes
	const apiRoutes = require('./controllers/api-controller')
	app.use('/api', apiRoutes)
	
	// Basic HTML gets (Handled by ReactRouter)
	// const routes = require("./controllers/basic-controller");
	// app.use("/", routes);

	// Default React route
	app.get("*", (req, res, next) => {
		res.sendFile(path.join(__dirname, "./public/index.html"));
	});

// ERRORS =========================================
	app.use(function(req, res) {
		res.type("text/html");
		res.status(404);
		res.send('Error 404');
	});

	app.use(function(err, req, res, next) {
		console.error(err.stack);
		res.status(500);
		res.send('Error 500');
	});

// START SERVER ===================================
const server = app.listen( PORT, () => console.log("----------------------- @ " + PORT) );

module.exports = server; // Export for testing
})();
