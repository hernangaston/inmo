import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Propiedad ({propiedad}){
	return (
			<div className="col s12 m4 l3">
				<div className="card small hoverable left">
				    <div className="card-content">
				      <span className="card-title activator grey-text text-darken-4">{propiedad.titulo}<i className="material-icons right">more_vert</i></span>
				      <p><Link to={`/propiedad/${propiedad._id}`}>Ir a: {propiedad.titulo}</Link></p>
				    </div>
				    <div className="card-reveal">
				      <span className="card-title grey-text text-darken-4">{propiedad.precio}<i className="material-icons right">close</i></span>
				      <p className="truncate">Here is some more information about this product that is only revealed once clicked on. For example the id: {propiedad._id}</p>
				    </div>
				    <div className="card-image waves-effect waves-block waves-light">
				      <p>Descripcion: { propiedad.descripcion }</p>
				    </div>
				</div>
			</div>			
		);
}

export default Propiedad;