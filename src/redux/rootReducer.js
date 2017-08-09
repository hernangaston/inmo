import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import games from './reducers/games';
import propiedades from './reducers/propiedades';


var rootReducer =  combineReducers({
	games,
	propiedades,
	routing: routerReducer
});

export default rootReducer;