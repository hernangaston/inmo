import { USER_REGISTER } from '../actions';


export default function user(state = [], action = {}){
	switch(action.type){
		case USER_REGISTER:
			return [...state, action.user];	
		default: 
			return state;
	}
}