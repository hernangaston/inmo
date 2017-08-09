import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Propiedad from './Propiedad.jsx';

function Propiedades ({ propiedades }){
	const propiedadSingle = (
		<div>	
			{propiedades.map((prop) => <Propiedad propiedad={prop} key={prop._id} />)}
		</div>);
	return (
		<div className="row">
			{ propiedadSingle }
		</div>
	);
}

Propiedades.propTypes ={
	propiedades: PropTypes.array.isRequired
}


export default Propiedades;



