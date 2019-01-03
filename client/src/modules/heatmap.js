// import API from '../utils/API';
// import { sendError, sendSuccess } from '../components/Notifications/NotificationCenter';

export const SET_PATH_ID = 'heatmap/SET_PATH_ID';
export const SET_PATH_ANGLE = 'heatmap/SET_PATH_ANGLE';


const initialState = {
	pathID: 0,
	pathAngle: 0,
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

		default:
			return state;
	}
};
export default heatmapState;

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