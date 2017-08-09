import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { savePropiedad } from '../redux/actions';
import PropiedadForm from './PropiedadForm.jsx';


class PropiedadFormPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			redirect: false
		}
	}

	savePropiedad(data){
		return this.props.savePropiedad(data)
		.then(this.setState({redirect: true}));				
	}


	render () {
		return (
			<div>
			{
				this.state.redirect ? <Redirect to="/" /> : 
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
		propiedad: state.propiedades.find(item => {item.id === props._id})
	}
	return { propiedad: null };
};

export default connect(mapStateToProps, { savePropiedad })(PropiedadFormPage);
