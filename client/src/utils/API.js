import axios from 'axios';

let allPathsInDB = [];

const API = {
	saveMarker: (path_id, x, y, uuid) => {
		return axios({
			method: 'POST',
			url: '/api/mark/save',
			data: {
				path_id,
				x,
				y,
				uuid
			}
		})
			.then((response) => response)
			.catch((error) => console.log('error', error));
	},

	getMarkersByPathId: (path_id) => {
		return axios({
			method: 'GET',
			url: '/api/mark/' + path_id
		})
			.then((response) => response)
			.catch((error) => console.warn('error', error));
	},

	createUUID: () => {
		let date = Date.now().toString(36); // e.g. jovhey51
		let rand = Math.random().toString(36).substr(2, 3); // e.g. uto
		let uuid = date + rand; // e.g. jovhey51uto
		return uuid;
	},

	getAllPaths: () => {
		return axios({
			method: 'GET',
			url: '/api/path/all'
		})
			.then((response) => {
				const paths = response.data;
				allPathsInDB = paths;
			})
			.catch((error) => console.log('error', error));
	},
	getRandomPath: (path_id) => {
		return axios({
			method: 'GET',
			url: '/api/path/random/' + path_id
		})
			.then((response) => response)
			.catch((error) => console.log('error', error));
	},
	getPathById: (path_id) => {
		return axios({
			method: 'GET',
			url: '/api/path/id/' + path_id
		})
			.then((response) => response)
			.catch((error) => console.log('error', error));
	},
	getPathByIdLocally: (path_id) => {
		if (allPathsInDB.length > 0) {
			const targetPath = allPathsInDB.filter((path) => path.id === path_id);
			if (targetPath.length > 0) {
				return targetPath[0];
			} else {
				return null;
			}
		} else {
			return null;
		}
	},

	getPathByAngle: (pathAngle) => {
		return axios({
			method: 'GET',
			url: '/api/path/angle/' + pathAngle
		})
			.then((response) => response)
			.catch((error) => console.log('error', error));
	}
};

export default API;
