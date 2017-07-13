import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Propiedad from './Propiedad.jsx';

function Propiedades ({ propiedades }){
	const emptyMessage = (
			<div className="spinner-layer spinner-yellow">
		        <div className="circle-clipper left">
		          <div className="circle"></div>
		        </div><div className="gap-patch">
		          <div className="circle"></div>
		        </div><div className="circle-clipper right">
		          <div className="circle"></div>
		        </div>
		      </div>
		);
	const propiedadSingle = (<div className="container">{propiedades.map((prop) => <Propiedad propiedad={prop} key={prop._id} />)}</div>);
	return (
		<div className="row">
			{ propiedades.length === 0 ? emptyMessage : propiedadSingle }
		</div>
	);
}

Propiedades.propTypes ={
	propiedades: PropTypes.array.isRequired
}


export default Propiedades;



