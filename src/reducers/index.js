import { combineReducers } from 'redux';
import authReducer from './reducer_auth';
import NavListReducer from './reducer_nav_list';
import BoardListReducer from './reducer_board_list';

const rootReducer = combineReducers({
	auth : authReducer,
	navStore : NavListReducer,
	board : BoardListReducer
});

export default rootReducer;
