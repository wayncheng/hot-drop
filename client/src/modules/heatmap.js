import API from '../utils/API';
// import { sendError, sendSuccess } from '../components/Notifications/NotificationCenter';

export const SET_PATH_ID = 'heatmap/SET_PATH_ID';
export const SET_PATH_ANGLE = 'heatmap/SET_PATH_ANGLE';
export const SET_MARKER_DATA = 'heatmap/SET_MARKER_DATA';

const memo = {};

const initialState = {
	pathID: 0,
	pathAngle: 0,
	markers: [],
};

const heatmapState = (state = initialState, action) => {
	switch (action.type) {
		case SET_PATH_ID:
			return {
				...state,
				pathID: action.pathID
			};
		case SET_PATH_ANGLE:
			return {
				...state,
				pathAngle: action.pathAngle
			};
		case SET_MARKER_DATA:
			return {
				...state,
				markers: action.markers,
			};

		default:
			return state;
	}
};
export default heatmapState;

export const getHeatMapMarkersByID = (pathID) => (dispatch) => {
	// If we already have the data from previous calls, just use that.
	// Not using for now since there aren't that many points and people
	// might add more while others are viewing, and those new points 
	// would be ignored.
	if (memo[pathID]){
		console.log('... using local data');
		dispatch({
			type: SET_MARKER_DATA,
			markers: memo[pathID],
		});
	}
	else {	
		API.getMarkersByPathId(pathID).then(response => {
			const markers = response.data;
			console.log('... new marker data:',markers);
			
			// memoize
			memo[pathID] = markers;
			
			dispatch({
				type: SET_MARKER_DATA,
				markers: markers,
			});
			
		})
		.catch(err => console.log('err:',err))
	}
};
// Path ID ========================================
export const setHeatMapPathID = (pathID) => (dispatch) => {
	dispatch({
		type: SET_PATH_ID,
		pathID
	});
};
export const setHeatMapPathAngle = (pathAngle) => (dispatch) => {
	dispatch({
		type: SET_PATH_ANGLE,
		pathAngle
	});
};

///////////////////////////////////////////////////////////////////////