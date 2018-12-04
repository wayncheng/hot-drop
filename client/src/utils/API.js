import axios from 'axios';

const API = {
	saveMarker: (path_id, x, y, uuid) => {
		return axios({
			method: "POST",
			url: "/api/mark/save",
			data: {
				path_id,
				x,
				y,
				uuid
			}
		})
			.then(response => response)
			.catch(error => console.log("error", error));
	},

	createUUID: () => {
		let date = Date.now().toString(36); // e.g. jovhey51
		let rand = Math.random().toString(36).substr(2,3); // e.g. uto
		let uuid = date+rand; // e.g. jovhey51uto
		return uuid;
	},

	getRandomPath: (path_id) => {
		return axios({
			method: "GET",
			url: "/api/path/random/"+path_id
		})
			.then(response => response)
			.catch(error => console.log("error", error));
	},
	getPathById: (path_id) => {
		return axios({
			method: "GET",
			url: "/api/path/"+path_id
		})
			.then(response => response)
			.catch(error => console.log("error", error));
	},

	getMarkersByPathId: path_id => {
		return axios({
			method: "GET",
			url: "/api/mark/"+path_id
		})
			.then(response => response)
			.catch(error => console.warn("error", error));
	},


}

export default API;