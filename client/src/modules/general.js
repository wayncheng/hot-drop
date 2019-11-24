import {setBusPath} from './picker';

export const SHOW_GUIDE = 'general/SHOW_GUIDE';
export const HIDE_GUIDE = 'general/HIDE_GUIDE';
export const TOGGLE_GUIDE = 'general/TOGGLE_GUIDE';
export const FLAG_VISITED = 'general/FLAG_VISITED';
export const UPDATE_URL_STATE = 'general/UPDATE_URL_STATE';

const initialState = {
	guideVisible : false,
	hasVisited   : false,
	pathID: 0,
	routing: {
		history: {},
		match: {},
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SHOW_GUIDE:
			return {
				...state,
				guideVisible : true,
			};

		case HIDE_GUIDE:
			return {
				...state,
				guideVisible : false,
			};

		case TOGGLE_GUIDE:
			return {
				...state,
				guideVisible : !state.guideVisible,
			};

		case FLAG_VISITED:
			return {
				...state,
				hasVisited : true,
			};

		case UPDATE_URL_STATE:
			return {
				...state,
				pathID: action.pathID,
				routing: {
					...state.routing,
					history: action.history,
					match: action.match,
				}
			};

		default:
			return state;
	}
};

// LAYER CONTROLS ========================================
export const showGuide = () => dispatch => {
	dispatch({type: SHOW_GUIDE});
};
export const hideGuide = () => dispatch => {
	dispatch({type: HIDE_GUIDE});
};
export const toggleGuide = () => dispatch => {
	dispatch({type: TOGGLE_GUIDE});
};

export const flagVisited = () => dispatch => {
	localStorage.setItem('hasVisited', 'true');
	dispatch({type: FLAG_VISITED});
};

export const extractPathIdFromUrl = (history,match) => dispatch => {
	// console.log('match:', match);
	// console.log('history:', history);

	let pid = 0;
	const queryFull = history.location.search;
	// const queryPathRegex = /[?&]p=[\w]+[&?#]?/g;
	const queryPathRegex = /[?&]p=[0-9]+[&?#]?/g;
	const matches = queryFull.match(queryPathRegex);
	if (matches) {
		pid = matches[0].slice(3).replace(/\W/g, '');
	}
	// console.log('pid:', pid);
	pid = parseInt(pid)

	dispatch({
		type: UPDATE_URL_STATE,
		pathID: pid,
		history,
		match,
	})
	
dispatch(	setBusPath(pid))
	// from url paramater (deprecated)
	// pid = parseInt(match.params.path_id);
	
	
	return parseInt(pid);
};
