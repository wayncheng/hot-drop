// Import the ORM to create functions that will interact with the database.
const fullORM = require("../db/orm");
const orm = fullORM.paths;

const Paths = {
  all: cb => {
		orm.getAll( res => cb(res) )
	},
	random: cb => {
		orm.getOneRandom( res => cb(res) )
	},
	count: cb => {
		orm.getCount( res => cb(res) )
	}
};

module.exports = Paths;
