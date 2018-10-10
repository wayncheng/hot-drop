"use strict";
(function() {
  const express = require("express");
	const router = express.Router();
  const dbMarkers = require("./models/Markers");
  const dbPaths =   require("./models/Paths");
  // const ORM = require("../config/orm");




//* MARKERS ========================================

	//> GET ALL MARKERS in DATABASE ...................
	router.get("/mark/all", (req, res) => {
		dbMarkers.all( data => res.json(data) )
	});

	//> GET ALL MARKERS FOR AN ANGLE ..................
	router.get("/mark/angle/:angle?", (req, res) => {
		dbMarkers.getByAngle( req.params.angle , 
			data => res.json(data) 
		)
	});

	//> GET ALL MARKERS for PATH_ID .................
  router.get("/mark/:path_id?", (req, res) => {
		
		// If a path_id is provided, return all the markers for that path_id.
		// If not provided, return all markers in database.
		if (req.params.path_id){
			dbMarkers.getByPathId( req.params.path_id , 
				data => res.json(data) 
			)
		}
		else {
			dbMarkers.all( data => {
				return res.json(data)
			})
		}
		
	});
		
	//> SAVE TO DATABASE ........................
	router.post("/mark/save", (req, res) => {
		console.log('req.body:',req.body);
		const {path_id,x,y,uuid} = req.body;
		
		dbMarkers.save( path_id, x, y, uuid, data => {
			console.log('data:',data);
			return res.json(data)
		})
		
	});





//* PATHS ==========================================
	
	

	//> GET ALL PATHS ..........................
	router.get("/path/all", (req, res) => {
		dbPaths.all( data => res.json(data) )
	});

	//> GET ONE RANDOM PATH ....................
  router.get("/path/random", (req, res) => {
		dbPaths.random( data => res.json(data) )
	});

	//> GET QUANTITY of PATHS in DB .............
	router.get("/path/count", (req, res) => {
		dbPaths.count( data => res.json(data) )
	});

	//> GET PATH BY PATH_ID ....................
	router.get("/path/:path_id?", (req, res) => {
		// If a path_id is provided, return path for that path_id.
		// If not provided, return all paths in database.
		if (req.params.path_id){
			dbPaths.getById( req.params.path_id , 
				data => res.json(data[0]) 
			)
		}
		else {
			dbPaths.all( data => {
				return res.json(data)
			})
		}
	})







	
//==================================================
	// router.get('/paths/:id', (req,res) => {
	// 	const {id} = req.params;
	// 	console.log('path_id',id);

	// 	dbPaths.getById(id, data => {
	// 		console.log('data',data);
	// 		return res.json(data);
	// 	})
	// })
		

  module.exports = router;
})();
