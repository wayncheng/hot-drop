// Import the ORM to create functions that will interact with the database.
const fullORM = require("../db/orm.js");
const orm = fullORM.paths;

const Paths = {
  all: cb => {
		orm.getAll( res => cb(res) )
  },
};

module.exports = Paths;
