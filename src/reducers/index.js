import { combineReducers } from 'redux';
import NavListReducer from './reducer_nav_list';

const rootReducer = combineReducers({
	navStore : NavListReducer
});

export default rootReducer;
