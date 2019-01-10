import API from '../utils/API';
import { sendSuccess } from '../components/Notifications/NotificationCenter';

export const SET_PATH_ID = 'heatmap/SET_PATH_ID';
export const SET_PATH_ANGLE = 'heatmap/SET_PATH_ANGLE';
export const SET_MARKER_DATA = 'heatmap/SET_MARKER_DATA';
export const SET_COLOR_COLD = 'heatmap/SET_COLOR_COLD';
export const SET_COLOR_HOT = 'heatmap/SET_COLOR_HOT';
export const SET_COLORS = 'heatmap/SET_COLORS';
export const SET_PREFERENCES = 'heatmap/SET_PREFERENCES';
export const RESET_PREFERENCES = 'heatmap/RESET_PREFERENCES';
export const TOGGLE_INDIVIDUALS = 'heatmap/TOGGLE_INDIVIDUALS';
export const TOGGLE_HEXBIN = 'heatmap/TOGGLE_HEXBIN';

const memo = {};

// const defaultPreferences = {
// 	colorCold: '#FFFFCC',
// 	colorHot: 'red',
// 	showingIndividuals: false,
// 	showingHexbin: true,
// }

const initialState = {
	pathID: 0,
	pathAngle: 0,
	markers: [],
	colorCold: '#FFFFCC',
	colorHot: 'red',
	showingIndividuals: false,
	showingHexbin: true,
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
		case SET_COLOR_COLD:
			return {
				...state,
				colorCold: action.colorCold,
			};
		case SET_COLOR_HOT:
			return {
				...state,
				colorHot: action.colorHot,
			};
		case SET_COLORS:
			return {
				...state,
				colorCold: action.colorCold,
				colorHot: action.colorHot,
			};
		case SET_PREFERENCES:
			return {
				...state,
				...action.preferences
			};
		case RESET_PREFERENCES:
			return {
				...state,
				colorCold: initialState.colorCold,
				colorHot: initialState.colorHot,
				showingHexbin: initialState.showingHexbin,
				showingIndividuals: initialState.showingIndividuals,
			};
		case TOGGLE_INDIVIDUALS:
			return {
				...state,
				showingIndividuals: !state.showingIndividuals,
			};
		case TOGGLE_HEXBIN:
			return {
				...state,
				showingHexbin: !state.showingHexbin,
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
		// console.log('... using local data');
		dispatch({
			type: SET_MARKER_DATA,
			markers: memo[pathID],
		});
	}
	else {	
		API.getMarkersByPathId(pathID).then(response => {
			const markers = response.data;
			// console.log('... new marker data:',markers);
			
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


// Path ID ======================================================
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


// Custom Preferences ============================================
export const setColorCold = (color) => (dispatch) => {
	dispatch({
		type: SET_COLOR_COLD,
		color
	});
};
export const setColorHot = (color) => (dispatch) => {
	dispatch({
		type: SET_COLOR_HOT,
		color
	});
};
export const setColors = (colorCold,colorHot) => (dispatch) => {
	dispatch({
		type: SET_COLORS,
		colorCold,
		colorHot,
	});

	// Save to localStorage as well
	localStorage.setItem("colorCold",colorCold);
	localStorage.setItem("colorHot",colorHot);
	
	// sendSuccess('Settings updated.')
};
export const setPreferences = (preferences) => (dispatch) => {
	dispatch({
		type: SET_PREFERENCES,
		preferences,
	});
	// sendSuccess('Settings updated.')
};
export const resetPreferences = () => (dispatch) => {
	dispatch({
		type: RESET_PREFERENCES,
	});

	// Save to localStorage as well
	localStorage.setItem("colorCold",initialState.colorCold);
	localStorage.setItem("colorHot",initialState.colorHot);

	sendSuccess('Settings successfully reset')
};
export const toggleIndividuals = () => (dispatch) => {
	dispatch({
		type: TOGGLE_INDIVIDUALS,
	});
};
export const toggleHexbin = () => (dispatch) => {
	dispatch({
		type: TOGGLE_HEXBIN,
	});
};



///////////////////////////////////////////////////////////////////////