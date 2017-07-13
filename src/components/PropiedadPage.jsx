import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchPropiedad } from '../redux/actions';


class PropiedadPage extends Component {
	
	componentDidMount(){
		if(this.props.params._id) {
			this.props.fetchPropiedad(this.props.params._id)
		}
	}

	render(){

		var foto = this.props.propiedad.foto.map((f) => { 
			return (<a className="carousel-item" href="#"><img src={"../static/img/" + f} key={f.toString()} /></a>)
		});

		return(
		<div className="row">
			<div className="col s12 m8 l6 offset-l3 offset-m2">
				<h1 className="teal">{this.props.propiedad.titulo}</h1>
				<h2 className="green-text">{this.props.propiedad.precio}</h2>					
			  	<p>{this.props.propiedad.descripcion}</p>
			  	<Link to="/propiedades">Volver</Link>
			</div>
		</div>);
	}
}

const mapStateToProps = (state, props) => {	
	if(props.params._id) {
		return {
			propiedad: state.propiedades.find(item => item._id === props.params._id)
		}
	}
	return { propiedad: null };
}

export default connect(mapStateToProps, { fetchPropiedad })(PropiedadPage);

