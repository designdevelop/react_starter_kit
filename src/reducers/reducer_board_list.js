import { FETCH_BOARD_LIST, FETCH_BOARD_DETAIL } from '../actions/index'; 


const INITIAL_STATE = { list : [], active : null };
export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case FETCH_BOARD_LIST :
			return {...state, list : action.payload.data.result};
		case FETCH_BOARD_DETAIL : 
			let activeBoard = null;

			for(let i=0; i<state.list.length; i++){
				if(action.payload == state.list[i].board_seq){
					activeBoard = state.list[i];
				}
			}

			return {...state, active : activeBoard}

		default : 
			return state;
	}
}

