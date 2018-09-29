// Import the ORM to create functions that will interact with the database.
const fullORM = require("../orm.js");
const orm = fullORM.markers;

const Markers = {
  all: cb => {
		orm.getAll( res => cb(res) )
  },
  // The variables cols and vals are arrays.
  add: (path_id, x, y, cb) => {
    orm.add(path_id,x,y, 
			res => cb(res)
		)
	},
  getByAngle: (angle,cb) => {
		orm.getByAngle( angle, 
			res => cb(res) 
		)
	}
};

module.exports = Markers;
