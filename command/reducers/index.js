import { combineReducers } from 'redux';

import data from './models';
import rotate from './rotate';

export default combineReducers({
	data,
	rotate
})