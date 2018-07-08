import { NAV_LIST } from '../actions/index';

const INITIAL_STATE = { navList : [], activeNav : null};
export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case NAV_LIST :
			return {...state, navList : action.payload};
		default : 
		return state;
	}
}
