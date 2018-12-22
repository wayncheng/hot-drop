import API from '../utils/API';
import { sendError, sendSuccess } from '../components/Notifications/NotificationCenter';

export const SET_PATH_ID = 'picker/SET_PATH_ID';


const initialState = {
	pathID: 0,
};

const heatmapState = (state = initialState, action) => {
	switch (action.type) {
		case SET_PATH_ID:
			return {
				...state,
				pathID: action.pathID
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

///////////////////////////////////////////////////////////////////////