import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import picker from './picker';

export default combineReducers({
	routing: routerReducer,
	picker,
})
