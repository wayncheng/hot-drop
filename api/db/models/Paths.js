'use strict';
(function() {
	
	const Sequelize = require('sequelize');

	module.exports = (sequelize) => {
		const Paths = sequelize.define(
			'paths',
			{
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true,
					unique: true
				},
				angle: { type: Sequelize.INTEGER },
				x: { type: Sequelize.INTEGER, defaultValue: 50 },
				y: { type: Sequelize.INTEGER, defaultValue: 50 }
			},
			{
				freezeTableName: true,
				underscored: true
			}
		);
		return Paths;
	};

})();
