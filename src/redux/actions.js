//import es6-promise from 'es6-promise';
//import fetch from 'isomorphic-fetch';
import axios from 'axios';

export const SET_PROPIEDADES = 'SET_PROPIEDADES';
export const ADD_PROPIEDAD = 'ADD_PROPIEDAD';
export const PROPIEDAD_FETCHED = 'PROPIEDAD_FETCHED';



export function setPropiedades(propiedades){
	return {
		type: SET_PROPIEDADES,
		propiedades
	}
}

export function addPropiedad(propiedad){
	return {
		type: ADD_PROPIEDAD,
		propiedad
	}
}

export function propiedadFetched(propiedad){
	return {
		type: PROPIEDAD_FETCHED,
		propiedad
	}
}


export function fetchPropiedades(){
	return dispatch => {
		fetch('/api/propiedades')
		.then(res => res.json())
		.then(data => dispatch(setPropiedades(data.propiedades)));
	}
}

export function fetchPropiedad(id){
	return dispatch => {
		fetch('/api/propiedad/' + id)
		.then(res => res.json())
		.then(data =>dispatch(propiedadFetched(data.propiedad)))
	}
}


export function savePropiedad(data) {
	return dispatch => {
		return fetch('/api/propiedades', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(data => dispatch(addPropiedad(data.propiedad)));
	}
}


