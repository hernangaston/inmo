import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navigation extends Component {
	render(){
		return (
			<div className="navbar-fixed">
			    <nav className="grey lighten-2">
			      <div className="nav-wrapper">
			        <a href="/" className="brand-logo grey-text text-darken-1">J&A Servicios Inmobiliarios</a>
			        <ul className="right hide-on-med-and-down">
						<li><Link to="/" className="grey-text text-darken-1">Volver</Link></li>
						<li><Link to="/propiedades" className="grey-text text-darken-1">Lista de Propiedades</Link></li>
						<li><Link to="/PropiedadForm" className="grey-text text-darken-1">Nueva Propiedad</Link></li>
						<li><Link to="/LoginForm" className="grey-text text-darken-1">Login</Link></li>
					</ul>
			      </div>
			    </nav>
			</div>
		);
	}
}


