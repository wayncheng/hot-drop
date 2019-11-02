'use strict';
(function() {
	const express = require('express');
	const router = express.Router();
	// const dbMarkers = require('./models/Markers');
	// const dbPaths = require('./models/Paths');
	// const ORM = require("../config/orm");
	const { Markers, Paths, sequelize, Sequelize } = require('./db/connection');
	const { Op } = Sequelize;

	//* MARKERS ========================================

	//> GET ALL MARKERS in DATABASE ...................
	router.get('/mark/all', (req, res) => {
		// dbMarkers.all((data) => res.json(data));
		Markers.findAndCountAll().then((result) => {
			console.log(result.count);
			res.json(result.rows)
		});
	});


	//TODO GET ALL MARKERS FOR AN ANGLE ..................
	// router.get('/mark/angle/:angle', (req, res) => {
	// 	// ! Need to establish the relationship between markers and paths models and then join tables
	// 	// Markers.findAndCountAll({
	// 	// 	where: { angle: req.params.angle },
	// 	// })
	// 	// .then(result => {
	// 	// 	console.log(result.count);
	// 	// 	res.json(result.rows)
	// 	// });
	// 	// dbMarkers.getByAngle(req.params.angle, (data) => res.json(data));
	// });

	//> GET ALL MARKERS for PATH_ID .................
	// If a path_id is provided, return all the markers for that path_id.
	// If not provided, return all markers in database.
	router.get('/mark/:path_id?', (req, res) => {
		const {path_id} = req.params;
		
		if (path_id) {
			Markers.findAndCountAll({
				where: { path_id: path_id },
			})
			.then(result => {
			  console.log(result.count);
			  res.json(result.rows)
			});
		} else {
			Markers.findAndCountAll()
			.then(result => {
			  console.log(result.count);
			  res.json(result.rows)
			});
		}

		// dbMarkers.getByPathId(req.params.path_id, (data) => {
		// 	console.log('marker count:', data.length);
		// 	res.json(data);
		// });
	});

	//> SAVE TO DATABASE ........................
	router.post('/mark/save', (req, res) => {
		console.log('marker data to save:', req.body);
		const { path_id, x, y, uuid, } = req.body;

		Markers.create({
			path_id,
			x,
			y,
			uuid,
			chapter: 2,
			season: 1,
		})
			.then(response => {
				// console.log('... marker saved');
				res.json(response);
			})
			.catch(error => console.log('db save error:', error));

		
		// dbMarkers.save(path_id, x, y, uuid, (data) => {
		// 	// console.log('data:',data);
		// 	return res.json(data);
		// });
	});

	//* PATHS ==========================================

	//> GET ALL PATHS ..........................
	router.get('/path/all', (req, res) => {
		Paths.findAndCountAll().then((result) => {
			console.log(result.count);
			res.json(result.rows)
		});
		// dbPaths.all((data) => res.json(data));
	});

	//> GET ONE RANDOM PATH ....................
	router.get('/path/random/:currentPathID?', (req, res) => {
		let { currentPathID } = req.params;
		// WHERE id != currentPathID
		// AND id > 18
		// ORDER BY RAND()
		// LIMIT 1
		Paths.findAll({
			where: {
				id: {
					[Op.ne]: currentPathID,
					[Op.gt]: 18,
				}
			},
			order: sequelize.random(),
			limit: 1,

		}).then((result) => {
			res.json(result[0])
		});


		// dbPaths.random(currentPathID, (data) => res.json(data));
	});


	//> GET QUANTITY of PATHS in DB .............
	router.get('/path/count', (req, res) => {
		Paths.count().then((count) => {
			console.log(count);
			res.json(count)
		});
		// dbPaths.count((data) => res.json(data));
	});

	//> GET PATH DATA BY PATH_ID ....................
	router.get('/path/id/:path_id', (req, res) => {
		const {path_id} = req.params;

		Paths.findOne({
			where: {
				id: path_id,
			}
		}).then((pathData) => {
			res.json(pathData)
		});

		// dbPaths.getById(req.params.path_id, (data) => res.json(data[0]));
	});

	//> GET PATH BY ANGLE ....................
	router.get('/path/angle/:angle', (req, res) => {
		const {angle} = req.params;

		Paths.findAll({
			where: {
				angle: angle,
			}
		}).then((results) => {
			res.json(results)
		});

		// dbPaths.getByAngle(req.params.angle, (data) => res.json(data[0]));
	});

	//==================================================

	module.exports = router;
})();
