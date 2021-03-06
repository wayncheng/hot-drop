// Import the ORM to create functions that will interact with the database.
const fullORM = require('../db/orm');
const orm = fullORM.paths;

const Paths = {
	all: (cb) => {
		orm.getAll((res) => cb(res));
	},
	getById: (path_id, cb) => {
		orm.getPathById(path_id, (res) => cb(res));
	},
	getById: (path_id, cb) => {
		orm.getPathById(path_id, (res) => cb(res));
	},
	getByAngle: (angle, cb) => {
		orm.getPathByAngle(angle, (res) => cb(res));
	},
	random: (currentPathID, cb) => {
		orm.getOneRandom(currentPathID, (res) => cb(res));
	},
	count: (cb) => {
		orm.getCount((res) => cb(res));
	}
};

module.exports = Paths;
