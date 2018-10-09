import axios from 'axios';

const API = {
	saveMarker: (path_id, x, y) => {
		return axios({
			method: "POST",
			url: "/api/mark/save",
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
			url: "/api/path/random"
		})
			.then(response => response)
			.catch(error => console.log("error", error));
	},


	getIP: () => {
		return axios({
			method: 'GET',
			url: 'https://json.geoiplookup.io/api?',
			// url: 'https://json.geoiplookup.io/api',
		})
		.then( response =>  {
			console.log(JSON.stringify(response, null, 2));
		})
		.catch( error => {
			console.log('error:',error)
		})
	}

}

export default API;