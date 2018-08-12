import { FETCH_LOGIN } from '../actions/index';

const INITIAL_STATE = { signature : null, userId : null };
export default function(state = INITIAL_STATE, action){
	switch (action.type){
		case FETCH_LOGIN :

			if(action.payload.data.result === null)
				return state;

			return {...state, userId : action.payload.data.result.userId, signature : action.payload.data.result.signature};
		default : 
			return state;
	}
}