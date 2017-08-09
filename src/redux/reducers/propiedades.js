import { SET_PROPIEDADES, ADD_PROPIEDAD, PROPIEDAD_FETCHED } from '../actions';

export default function propiedades(state = [], action = {}){
	switch(action.type){
		case SET_PROPIEDADES:
			return action.propiedades;
		case ADD_PROPIEDAD:
			return [
				...state,
				action.propiedad
			];
		case PROPIEDAD_FETCHED:
			const index = state.findIndex(item => item._id === state._id);
			if(index > -1) {
				return state.map(item => {
					if(item._id === action.propiedad._id) return action.propiedad;
					return item;
				});				
			}else{
				return [
				...state,
				action.propiedad
				];
			};	
		default: 
			return state;
	}
} 