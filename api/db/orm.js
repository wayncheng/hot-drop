'use strict';
(function() {
	////////////////////////////////////////////////////
	// Import MySQL connection.
	const connection = require('./connection.js');

	// Database / Table variables to use in ORM
	let DB = process.env.DEV_DB_NAME;
	if (process.env.NODE_ENV === 'production') {
		DB = process.env.JAWSDB_DB;
	}
	const PTBL = DB + '.paths';
	const MTBL = DB + '.markers';

	////////////////////////////////////////////////////
	const orm = {

		//+ MARKERS ========================================
		markers: {
			getAll: (cb) => {
				console.log(`---> getAll (markers)`);
				const query = ` SELECT * FROM ${MTBL};`;
				connection.query(query, (err, result) => {
					if (err) throw err;
					cb(result);
				});
			},

			getByAngle: (angle, cb) => {
				console.log(`---> getByAngle (${angle})`);

				let query = ` SELECT ${MTBL}.id, 
						${MTBL}.x AS mark_x, 
						${MTBL}.y AS mark_y,
						${MTBL}.path_id,
						${PTBL}.angle,
						${PTBL}.x AS path_x, 
						${PTBL}.y AS path_y
					FROM ${MTBL}, ${PTBL}
					WHERE ${MTBL}.path_id = ${PTBL}.id
					AND ${PTBL}.angle = ${angle}
				;`;

				connection.query(query, (err, result) => {
					if (err) throw err;
					cb(result);
				});
			},

			getByPathId: (path_id, cb) => {
				console.log(`---> getByPathId (${path_id})`);

				let query = ` SELECT ${MTBL}.id, 
						${MTBL}.x AS mark_x, 
						${MTBL}.y AS mark_y,
						${MTBL}.path_id
					FROM ${MTBL}
					WHERE ${MTBL}.path_id = ${path_id}
				;`;

				connection.query(query, (err, result) => {
					if (err) throw err;
					cb(result);
				});
			},

			save: (path_id, x, y, uuid, cb) => {
				const query = `INSERT INTO ${MTBL} (\`path_id\`,\`x\`,\`y\`,\`uuid\`) VALUES (${path_id},${x},${y},\'${uuid}\');`;

				connection.query(query, (err, result) => {
					if (err) throw err;
					cb(result);
				});
			}
		},

		//+ PATHS ==========================================
		paths: {
			getAll: (cb) => {
				console.log(`---> getAll (paths)`);
				const query = ` SELECT * FROM ${PTBL};`;
				connection.query(query, (err, result) => {
					if (err) throw err;
					cb(result);
				});
			},

			getPathById: (path_id, cb) => {
				console.log(`---> getPathById (paths)`);
				const query = ` SELECT ${PTBL}.id, 
						${PTBL}.x, 
						${PTBL}.y,
						${PTBL}.angle
					FROM ${PTBL}
					WHERE ${PTBL}.id = ${path_id}
				;`;
				connection.query(query, (err, result) => {
					if (err) throw err;
					cb(result);
				});
			},
			getPathByAngle: (angle, cb) => {
				console.log(`---> getPathByAngle (paths)`);
				const query = ` SELECT ${PTBL}.id, 
						${PTBL}.x, 
						${PTBL}.y,
						${PTBL}.angle
					FROM ${PTBL}
					WHERE ${PTBL}.angle = ${angle}
				;`;
				connection.query(query, (err, result) => {
					if (err) throw err;
					cb(result);
				});
			},

			getOneRandom: (currentPathID, cb) => {
				console.log(`---> getOneRandom (paths)`);
				currentPathID = currentPathID || 0;
				const query = 
				`SELECT * 
				FROM ${PTBL} 
				WHERE ${PTBL}.id != ${currentPathID} 
				ORDER BY RAND() 
				LIMIT 1;`;
				connection.query(query, (err, result) => {
					if (err) throw err;
					cb(result[0]);
				});
			},

			getCount: (cb) => {
				console.log(`---> getCount (paths)`);
				const query = ` SELECT COUNT(*) FROM ${PTBL};`;
				connection.query(query, (err, result) => {
					if (err) throw err;
					cb(result);
				});
			}
		}
	};
	//+==================================================

	////////////////////////////////////////////////////
	// update: function(id, text, cb) {
	// 	var queryString = `UPDATE ${PAGES_TABLE} SET text = "${text}" WHERE id = ${id}`;
	// 	console.log(queryString);

	// 	connection.query(queryString, function(err, result) {
	// 		if (err) { throw err; }
	// 		cb(result);
	// 	});
	// }

	module.exports = orm; // Export the orm object for the model

	////////////////////////////////////////////////////
	// Helper function for SQL syntax.
	function printQuestionMarks(num) {
		var arr = [];

		for (var i = 0; i < num; i++) {
			arr.push('?');
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
				if (typeof value === 'string' && value.indexOf(' ') >= 0) {
					value = "'" + value + "'";
				}
				// e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
				// e.g. {sleepy: true} => ["sleepy=true"]
				arr.push(key + '=' + value);
			}
		}

		// translate array of strings to a single comma-separated string
		return arr.toString();
	}

	////////////////////////////////////////////////////
})();
