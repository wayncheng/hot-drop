
export const SHOW_GUIDE   = 'general/SHOW_GUIDE'
export const HIDE_GUIDE   = 'general/HIDE_GUIDE'
export const TOGGLE_GUIDE = 'general/TOGGLE_GUIDE'

const initialState = {
	guideVisible: false,
};

export default (state = initialState, action) => {
	switch (action.type) {

		case SHOW_GUIDE:
			return {
				...state,
				guideVisible: true,
			}

		case HIDE_GUIDE:
			return {
				...state,
				guideVisible: false,
			}

		case TOGGLE_GUIDE:
			return {
				...state,
				guideVisible: !state.guideVisible,
			}


		default:
			return state
	}
}

// LAYER CONTROLS ========================================
export const showGuide = () => dispatch => {
	dispatch({ type: SHOW_GUIDE })
}
export const hideGuide = () => dispatch => {
	dispatch({ type: HIDE_GUIDE })
}
export const toggleGuide = () => dispatch => {
	dispatch({ type: TOGGLE_GUIDE })
}