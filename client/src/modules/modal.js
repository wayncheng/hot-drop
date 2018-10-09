export const TOGGLE_MODAL = 'modal/TOGGLE_MODAL'
export const OPEN_MODAL = 'modal/OPEN_MODAL'
export const CLOSE_MODAL = 'modal/CLOSE_MODAL'


const initialState = {
	isOpen: false,
	allModals: {
		modal_id: false,
		modal_id_2: false,
		modal_search: false,
	}
}

//==================================================
export default (state = initialState, action) => {
	
	let currentModalState = state.allModals[action.modalID]
	// if (currentModalState === undefined){
	// 	console.warn('Unknown modal id provided.')
	// }
	
  switch (action.type) {

		case OPEN_MODAL:
			return {
				...state,
				allModals: {
					...state.allModals,
					[action.modalID]: true,
				},
			}
		case CLOSE_MODAL:
			return {
				...state,
				allModals: {
					...state.allModals,
					[action.modalID]: false,
				},
			}

		case TOGGLE_MODAL:
			return {
				...state,
				allModals: {
					...state.allModals,
					[action.modalID]: !currentModalState
				},
			}

    default:
      return state
  }
}


//==================================================
export const openModal = modalID => dispatch => dispatch(
	{
		type: OPEN_MODAL,
		modalID
	}
)
export const closeModal = modalID => dispatch => dispatch(
	{
		type: CLOSE_MODAL,
		modalID
	}
)

//
export const toggleModal = modalID => dispatch => dispatch(
	{
		type: TOGGLE_MODAL,
		modalID
	}
)



///////////////////////////////////////////////////////////////////////
