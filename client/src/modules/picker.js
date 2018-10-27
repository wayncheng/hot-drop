import API from '../utils/API';
import {
	sendError,
	sendSuccess,
} from '../components/Notifications/NotificationCenter';

export const PLACE_MARKER = 'picker/PLACE_MARKER';
export const REMOVE_MARKER = 'picker/REMOVE_MARKER';
export const GET_NEW_BUS =   'picker/GET_NEW_BUS';
export const SET_BUS_PATH =   'picker/SET_BUS_PATH';
export const SUBMIT_PLACEMENT = 'picker/SUBMIT_PLACEMENT';
export const SET_UUID = 'picker/SET_UUID';

const initialState = {
	location: { 
		x: -100, // Coordinates are percentages in decimal form. e.g. the center of the map would be x=0.5, y=0.5 
		y: -100,
	},
	bus: {
		id: 1,
		angle: 360,
		x: 50,
		y: 50,
	},
	markerPlaced: false,
	uuid: null,
};

export default (state = initialState, action) => {
	switch (action.type) {

		case PLACE_MARKER:
			return {
				...state,
				location: action.location,
				markerPlaced: true,
			}

		case REMOVE_MARKER:
			return {
				...state,
				location: {
					x: -100,
					y: -100,
				},
				markerPlaced: false,
			}
		
		case GET_NEW_BUS:
			return {
				...state,
				bus: action.bus
			}
		
		case SET_BUS_PATH:
			return {
				...state,
				bus: action.bus
			}

		// case SUBMIT_PLACEMENT:
		// 	return {
		// 		...state,
		// 	}
		case SET_UUID:
			return {
				...state,
				uuid: action.uuid
			}

		default:
			return state
	}
}

// * DATABASE =======================================
export const submitPlacement = (path_id,location,uuid) => dispatch => {
	console.log('--> submit')

	API.saveMarker(path_id, location.x, location.y, uuid).then( response => {
		if (response.status === 200) {
			console.log('... success')
			sendSuccess('Successfully submitted!', null, 2000)
		}
		else {
			console.error('... error')
			sendError('Something went wrong while submitting', 'Oops', 2000)
		}

		// Reset......................
		dispatch( reset() )
	})


}

// CYCLE,RESET ====================================
export const getNewBus = () => dispatch => {

	API.getRandomPath().then( response => {
		const pathData = response.data;

		dispatch({
			type: SET_BUS_PATH,
			bus: pathData,
		})
	})

}
// Set the Bus Path ----------------
// - path_id as input
// - query DB to find corresponsing angle
// - set in state

export const setBusPath = path_id => dispatch => {

		API.getPathById(path_id).then( response => {
			const pathData = response.data;
			console.log('pathData:',pathData)
			
			dispatch({
				type: SET_BUS_PATH,
				bus: pathData,
			})
		})
	

}

export const reset = () => dispatch => {
	dispatch( removeMarker() );
	dispatch( getNewBus() );
	console.log('--------------------------------------------')	
}

// MARKERS ========================================
export const setMarker = location => dispatch => {
	dispatch({
		type: PLACE_MARKER,
		location
	})
}
export const removeMarker = () => dispatch => {
	dispatch({
		type: REMOVE_MARKER
	})
}

// UUID ========================================
export const setUUID = uuid => dispatch => {
	dispatch({
		type: SET_UUID,
		uuid,
	})
}

///////////////////////////////////////////////////////////////////////

	
// function getRandomIntInclusive(min, max) {
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
// }

// function formatDecimal(n){
// 	let factor = 1000;
// 	let formatted = Math.floor(n * factor) / factor;
// 	return formatted;
// }