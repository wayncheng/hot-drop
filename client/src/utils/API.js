import axios from 'axios';
import publicIp from 'public-ip';
import bcrypt from 'bcryptjs';

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
	getRandomPath: () => {
		return axios({
			method: "GET",
			url: "/api/path/random"
		})
			.then(response => response)
			.catch(error => console.log("error", error));
	},


	getUUID: () => {
		return publicIp.v4().then(ip => {
			console.log(ip);
			let uuid = ip;
			// let uuid = ip.split('.').join('_')

			// let hashID = bcrypt.hashSync(ip, 3, function(err, hash) {
			// 	if (err) throw err;
			// 	// console.log('hash',hash)
			// 	return hash
			// });
			
			let hashID = bcrypt.hashSync(ip)
			// return hashID
			console.log('hashID:',hashID)

			return uuid
		});
	},

}

export default API;