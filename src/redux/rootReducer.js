import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import games from './reducers/games';
import propiedades from './reducers/propiedades';
import users from './reducers/users';


var rootReducer =  combineReducers({
	games,
	propiedades,
	users,
	routing: routerReducer
});

export default rootReducer;