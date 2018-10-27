import axios from 'axios';
// import address from 'address';
// import publicIp from 'public-ip';
// import bcrypt from 'bcryptjs';


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
	getIP: () => {
		// return publicIp.v4().then(ip => {
		// 	console.log(ip);
		// 	let uuid = ip;
		// 	// let uuid = ip.split('.').join('_')

		// 	// let hashID = bcrypt.hashSync(ip, 3, function(err, hash) {
		// 	// 	if (err) throw err;
		// 	// 	// console.log('hash',hash)
		// 	// 	return hash
		// 	// });
			
		// 	// let hashID = bcrypt.hashSync(ip)
		// 	// console.log('hashID:',hashID)
		// 	// return hashID

		// 	return uuid
		// });
		
		// return address.ip();

		// console.log('ip:',ip)
		// return ip;
	},

	setIdState: () => {

	},

	getUUID: () => {
		let uuid = Date.now();
		return uuid;
	},

	getRandomPath: () => {
		return axios({
			method: "GET",
			url: "/api/path/random"
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