import API from '../utils/API';

export const PLACE_MARKER = 'picker/PLACE_MARKER'
export const REMOVE_MARKER = 'picker/REMOVE_MARKER'
export const GET_NEW_BUS =   'picker/GET_NEW_BUS'
export const SUBMIT_PLACEMENT = 'picker/SUBMIT_PLACEMENT'
export const SET_UUID = 'picker/SET_UUID'

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
	uuid: null,
	markerPlaced: false,
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

// DATABASE =======================================
export const submitPlacement = (path_id,location) => dispatch => {
	console.log('> submit')

	API.saveMarker(path_id, location.x, location.y).then( response => {
		if (response.status === 200) {
			console.log('Successfully Saved!')
		}
		else {
			console.log('There was an error saving the marker')
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
			type: GET_NEW_BUS,
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