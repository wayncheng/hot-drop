import API from '../utils/API';

export const PLACE_MARKER = 'map/PLACE_MARKER'
export const REMOVE_MARKER = 'map/REMOVE_MARKER'
export const GET_NEW_BUS = 'map/GET_NEW_BUS'
export const SUBMIT_PLACEMENT = 'map/SUBMIT_PLACEMENT'

let db = [];

const initialState = {
	location: { 
		x: -1, // Coordinates are percentages in decimal form. e.g. the center of the map would be x=0.5, y=0.5 
		y: -1,
	},
	bus: {
		id: 1,
		angle: 360,
		x: 50,
		y: 50,
	},
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
					x: -1,
					y: -1,
				},
				markerPlaced: false,
			}
		
		case GET_NEW_BUS:
			return {
				...state,
				bus: action.bus
			}

		case SUBMIT_PLACEMENT:
			return {
				...state,
			}

		default:
			return state
	}
}

// DATABASE =======================================
export const submitPlacement = (path_id,location) => dispatch => {
	console.log('> submitPlacement')

	API.saveMarker(path_id, location.x, location.y).then( response => {
		if (response.status === 200) {
			console.log('Successfully Saved!')
		}
		else {
			console.log('There was an error saving the marker')
		}
	})

	// Reset......................
	dispatch( reset() )

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
	console.log('> reset');
	
	dispatch( removeMarker() );
	dispatch( getNewBus() );
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