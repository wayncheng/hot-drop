'use strict';
(function(){
////////////////////////////////////////////////////
// Import MySQL connection.
const connection = require("./connection.js"); 

// Database / Table variables to use in ORM
const DB = process.env.DB_NAME;
const PATHS_TABLE = DB+'.paths';
const MARKERS_TABLE = DB+'.markers';

////////////////////////////////////////////////////
	const orm = {

		////////////////////////////////////////////////////
		getAllMarkers: () => {
			console.log(`ORM >>> getAllMarkers`);
			
			const qs = ` SELECT * FROM ${MARKERS_TABLE};`;

			connection.query(qs, (err,result) => {
				if (err) throw err;
				let dbResponse = result[0];
				cb(dbResponse);
			});
		},
		////////////////////////////////////////////////////
		getMarkersByAngle: angle => {
			console.log(`ORM >>> getMarkersByAngle (${angle})`);
			
			let query = 
			` SELECT markers.id, 
				  markers.x AS mark_x, 
				  markers.y AS mark_y, 
				  paths.angle,
				  paths.x AS path_x, 
				  paths.y AS path_y
				FROM markers, paths
				WHERE markers.path_id = paths.id
				AND paths.angle = ${angle}
			;`;


			connection.query(query, (err,result) => {
				if (err) throw err;
				let dbResponse = result[0];
				cb(dbResponse);
			});
		},
		
		////////////////////////////////////////////////////
		addMarker: (path_id, x, y, cb) => {
			const qs = `INSERT INTO markers ('path_id','x','y') 
			            VALUES (${path_id},${x},${y});`
			console.log(qs);
			
		
			connection.query( qs, vals, (err,result) => {
				if (err) throw err;
				cb(result);
			});
		},
		////////////////////////////////////////////////////
		// update: function(id, text, cb) {			
		// 	var queryString = `UPDATE ${PAGES_TABLE} SET text = "${text}" WHERE id = ${id}`;
		// 	console.log(queryString);
			
		// 	connection.query(queryString, function(err, result) {
		// 		if (err) { throw err; }
		// 		cb(result);
		// 	});
		// }
	};
	
	// Export the orm object for the model
	module.exports = orm;
	

	////////////////////////////////////////////////////
	// Helper function for SQL syntax.
	function printQuestionMarks(num) {
		var arr = [];
		
		for (var i = 0; i < num; i++) {
			arr.push("?");
		}
		
		return arr.toString();
	}
	
	// Helper function to convert object key/value pairs to SQL syntax
	function objToSql(ob) {
		var arr = [];
		
		// loop through the keys and push the key/value as a string int arr
		for (var key in ob) {
			var value = ob[key];
			// check to skip hidden properties
			if (Object.hasOwnProperty.call(ob, key)) {
				// if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
				if (typeof value === "string" && value.indexOf(" ") >= 0) {
					value = "'" + value + "'";
				}
				// e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
				// e.g. {sleepy: true} => ["sleepy=true"]
				arr.push(key + "=" + value);
			}
		}
		
		// translate array of strings to a single comma-separated string
		return arr.toString();
	}

////////////////////////////////////////////////////
})();