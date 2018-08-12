import { combineReducers } from 'redux';
import authReducer from './reducer_auth';
import NavListReducer from './reducer_nav_list';

const rootReducer = combineReducers({
	auth : authReducer,
	navStore : NavListReducer
});

export default rootReducer;
