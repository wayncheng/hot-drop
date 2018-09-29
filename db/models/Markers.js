// Import the ORM to create functions that will interact with the database.
const orm = require("../orm.js");

const Markers = {
  all: cb => {
		orm.getAllMarkers( "markers", 
			res => cb(res)
		)
  },
  // The variables cols and vals are arrays.
  add: (path_id, x, y, cb) => {
    orm.addMarker(path_id,x,y, 
			res => cb(res)
		)
	}
};

module.exports = Markers;
