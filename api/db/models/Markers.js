'use strict';
(function() {
	const Sequelize = require('sequelize');

	module.exports = (sequelize) => {
		const Markers = sequelize.define(
			'markers',
			{
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true,
					unique: true,
				},
				x: { 
					type: Sequelize.DECIMAL(5, 2), 
					allowNull: false 
				},
				y: { 
					type: Sequelize.DECIMAL(5, 2), 
					allowNull: false 
				},
				path_id: { 
					type: Sequelize.INTEGER, 
					allowNull: false 
				},
				uuid: { 
					type: Sequelize.STRING(45), 
					defaultValue: '0.0.0.0' 
				},
				chapter: { type: Sequelize.INTEGER, },
				season: { type: Sequelize.INTEGER, },
				time: { 
					type: Sequelize.DATE 
				},
			},
			{
				freezeTableName: true,
				underscored: true
			}
		);
		return Markers;
	};
})();
