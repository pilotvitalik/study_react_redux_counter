import { combineReducers } from 'redux';

import countReducer from './countSlice';

const rootReducer = combineReducers({
	count: countReducer,
})

export default rootReducer;