import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { savePropiedad, fetchPropiedad } from '../redux/actions';
import PropiedadForm from './PropiedadForm.jsx';


class PropiedadFormPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			redirect: false
		}
	}

	componentDidMount(){
		this.props.fetchPropiedad(this.props._id);
	}

	savePropiedad({ _id, titulo, precio, descripcion }){
		return this.props.savePropiedad({ _id, titulo, precio, descripcion })
		.then(this.setState({redirect: true}));				
	}

	render () {
		return (
			<div>
			{
				this.state.redirect ?
				<Redirect to="/" /> : 
				<PropiedadForm
				propiedad={this.props.propiedad}
				savePropiedad={this.savePropiedad.bind(this)}
				/>
			}
			</div>
		);
	}
}


function mapStateToProps(state, props) {	
	return {
		propiedad: state.propiedades.find(item => item._id === props._id)
	}
	return { propiedad: null };
};

export default connect(mapStateToProps, { savePropiedad, fetchPropiedad })(PropiedadFormPage);
