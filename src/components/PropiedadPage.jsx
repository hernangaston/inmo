import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { fetchPropiedad } from '../redux/actions';


class PropiedadPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			_id: this.props.propiedad ? this.props.propiedad._id : null,
			titulo: this.props.propiedad ? this.props.propiedad.titulo : '',
			precio: this.props.propiedad ? this.props.propiedad.precio : '',
			descripcion: this.props.propiedad ? this.props.propiedad.descripcion : '',
			foto: this.props.propiedad ? this.props.propiedad.fotos : [],
			redirect: false
		}
	}
	
	componentDidMount(){
		$(document).ready(() => {
	      $('.slider').slider({indicators: false});
	    });
	}



	render(){
		var foto = this.state.foto.map((f) => {			 
			return (<li>
				<img src={"../img/" + f} key={f.toString()} />
			</li>);
		});

		return(
		<div className="row">
			<div className="col s12 m8 l6 offset-l3 offset-m2">
				<h1>Titulo: {this.state.titulo}</h1>
				<div className="slider"><ul className="slides">{ foto }</ul></div>
				<h2>Precio: {this.state.precio}</h2>					
			  	<p>Descripcion: {this.state.descripcion}</p>		  	
		  	    <Link to="/editar"><button className="btn">Editar</button></Link>
		  	    <Link to="/editar"><button className="btn">Editar</button></Link>
		  	    <Link to="/editar"><button className="btn">Editar</button></Link>	  	 
			</div>
		</div>);
	}
}

const mapStateToProps = (state, props) => {	
	if(props.match.params._id) {
		return {
			propiedad: state.propiedades.find(item => item._id === props.match.params._id)
		}
	}
	return { propiedad: null };
}

export default withRouter(connect(mapStateToProps)(PropiedadPage));

