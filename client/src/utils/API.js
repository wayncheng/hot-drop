import axios from 'axios';

const API = {
	saveMarker: (path_id, x, y) => {
		return axios({
			method: "POST",
			url: "/api/save",
			data: {
				path_id,
				x,
				y,
			}
		})
			.then(response => response)
			.catch(error => console.log("error", error));
	},
	getRandomPath: () => {
		return axios({
			method: "GET",
			url: "/api/random"
		})
			.then(response => response)
			.catch(error => console.log("error", error));
	},

}

export default API;