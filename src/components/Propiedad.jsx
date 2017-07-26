import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Propiedad ({propiedad}){
	console.log(propiedad.fotos);
	return (
		<div className="card small">
			<div className="card-image waves-effect waves-block waves-light">
				<img className="activator" src={`../img/${propiedad.fotos[0]}`} />
			</div>
			<div className="card-content">
				<span className="card-title activator grey-text text-darken-4">{propiedad.titulo}<i className="material-icons right">more_vert</i></span>
				<p><Link to={`/propiedad/${propiedad._id}`}>Ir a: {propiedad.titulo}</Link></p>
			</div>
			<div className="card-reveal">
				<span className="card-title grey-text text-darken-4">{propiedad.precio}<i className="material-icons right">close</i></span>
				<p>{ propiedad.descripcion }</p>
			</div>
		</div>	
	);
}

export default Propiedad;


