import API from '../utils/API';
import { sendError, sendSuccess } from '../components/Notifications/NotificationCenter';

export const PLACE_MARKER = 'picker/PLACE_MARKER';
export const REMOVE_MARKER = 'picker/REMOVE_MARKER';
export const GET_NEW_BUS = 'picker/GET_NEW_BUS';
export const SET_BUS_PATH = 'picker/SET_BUS_PATH';
export const SUBMIT_PLACEMENT = 'picker/SUBMIT_PLACEMENT';
export const SET_UUID = 'picker/SET_UUID';
export const REMOVE_FIRST_TIME_FLAG = 'picker/REMOVE_FIRST_TIME_FLAG';
export const INCREMENT_SAVE_COUNT = 'picker/INCREMENT_SAVE_COUNT';

const itinerary = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

const initialState = {
	location: {
		x: -100, // Coordinates are percentages in decimal form. e.g. the center of the map would be x=0.5, y=0.5
		y: -100
	},
	bus: {
		id: 0,
		angle: 0,
		x: 50,
		y: 50
	},
	// bus: {
	// 	id: 1,
	// 	angle: 360,
	// 	x: 50,
	// 	y: 50
	// },
	itinerary: itinerary,
	markerPlaced: false,
	uuid: null,
	saveCount: 0,
	isFirstTime: true
};

const pickerState = (state = initialState, action) => {
	switch (action.type) {
		case PLACE_MARKER:
			return {
				...state,
				location: action.location,
				markerPlaced: true
			};

		case REMOVE_MARKER:
			return {
				...state,
				location: {
					x: -100,
					y: -100
				},
				markerPlaced: false
			};

		case GET_NEW_BUS:
			return {
				...state,
				bus: action.bus
			};

		case SET_BUS_PATH:
			return {
				...state,
				bus: action.bus
			};

		case INCREMENT_SAVE_COUNT:
			return {
				...state,
				saveCount: state.saveCount + 1
				// itinerary: itinerary.shift(),
			};
		case REMOVE_FIRST_TIME_FLAG:
			return {
				...state,
				isFirstTime: false
			};
		case SET_UUID:
			return {
				...state,
				uuid: action.uuid
			};

		default:
			return state;
	}
};
export default pickerState;

// * DATABASE =======================================
export const submitPlacement = (path_id, location, uuid) => (dispatch) => {
	console.log('--> submit');

	API.saveMarker(path_id, location.x, location.y, uuid).then((response) => {
		if (response.status === 200) {
			console.log('... success');
			sendSuccess('Successfully submitted!', null, 2000);
		} else {
			console.error('... error');
			sendError('Something went wrong while submitting', 'Oops', 2000);
		}

		// Reset......................
		dispatch(reset(path_id));
		dispatch(incrementSaveCount());
	});

	dispatch(removeFirstTimeFlag());
};

// CYCLE,RESET ====================================
export const getNewBus = (currentPathID) => (dispatch) => {
	currentPathID = currentPathID || 0;
	API.getRandomPath(currentPathID).then((response) => {
		const pathData = response.data;

		dispatch({
			type: SET_BUS_PATH,
			bus: pathData
		});
	});
};
export const sendNextBus = (saveCount) => (dispatch) => {
	console.log('saveCount:', saveCount);

	if (saveCount > itinerary.length) {
		dispatch(getNewBus());
	} else {
		let path_id = itinerary[saveCount];
		console.log('path_id:', path_id);
		dispatch(setBusPath(path_id));
	}
};

// Set the Bus Path ----------------
// - path_id as input
// - query DB to find corresponsing angle
// - set in state
export const setBusPath = (pathID) => (dispatch) => {
	const localPathData = API.getPathByIdLocally(pathID);
	if (localPathData) {
		// console.log('local path data:',localPathData);
		dispatch({
			type: SET_BUS_PATH,
			bus: localPathData
		});
	} else {
		// console.log('fetching path data from DB');
		API.getPathById(pathID).then((response) => {
			const pathData = response.data;
			dispatch({
				type: SET_BUS_PATH,
				bus: pathData
			});
		});
	}
};

export const incrementSaveCount = () => (dispatch) => {
	dispatch({
		type: INCREMENT_SAVE_COUNT
	});
};

export const reset = (path_id) => (dispatch) => {
	// path_id = path_id || 1;
	dispatch(removeMarker());
	dispatch(getNewBus(path_id));
	// dispatch( sendNextBus() );
	console.log('--------------------------------------------');
};

// MARKERS ========================================
export const setMarker = (location) => (dispatch) => {
	dispatch({
		type: PLACE_MARKER,
		location
	});
};
export const removeMarker = () => (dispatch) => {
	dispatch({
		type: REMOVE_MARKER
	});
};
export const removeFirstTimeFlag = () => (dispatch) => {
	dispatch({
		type: REMOVE_FIRST_TIME_FLAG
	});
};

// UUID ========================================
export const setUUID = (uuid) => (dispatch) => {
	dispatch({
		type: SET_UUID,
		uuid
	});
};

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
