"use strict";
(function() {
  const express = require("express");
	const router = express.Router();
  const dbMarkers = require("../db/models/Markers");
  // const ORM = require("../config/orm");


  /////////////////////////////////////////////////////
  router.get("/markers/all", (req, res) => {
    dbMarkers.all().then( data => {
      console.log("GET /markers/all >>> data", data);
      return res.json(data);
    });
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
