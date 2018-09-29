"use strict";
(function() {
  const express = require("express");
	const router = express.Router();
  const dbMarkers = require("../models/Markers");
  const dbPaths = require("../models/Paths");
  // const ORM = require("../config/orm");


  /////////////////////////////////////////////////////
  router.get("/angle/:angle?", (req, res) => {
		dbMarkers.getByAngle( req.params.angle , 
			data => res.json(data) 
		)
	});
	
  router.get("/markers/:id?", (req, res) => {
		// const {id} = req.params;

		dbMarkers.all( data => {
			console.log('data:',data);
			return res.json(data)
		})
	});

  router.get("/paths/:id?", (req, res) => {
		// const {id} = req.params;

		dbPaths.all( data => {
			console.log('data:',data);
			return res.json(data)
		})

	});
	/////////////////////////////////////////////////////
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
