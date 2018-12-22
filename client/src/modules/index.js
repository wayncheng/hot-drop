import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import picker from './picker';
import general from './general';
import modal from './modal';
import heatmap from './heatmap';


export default combineReducers({
	routing: routerReducer,
	picker,
	general,
	modal,
	heatmap,
})
