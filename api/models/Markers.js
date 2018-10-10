// Import the ORM to create functions that will interact with the database.
const fullORM = require("../db/orm");
const orm = fullORM.markers;

const Markers = {
  all: cb => {
		orm.getAll( res => cb(res) )
  },
  // The variables cols and vals are arrays.
  save: (path_id, x, y, uuid, cb) => {
    orm.save(path_id,x,y,uuid,
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
