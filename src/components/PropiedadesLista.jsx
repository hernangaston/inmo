import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Propiedades  from './Propiedades.jsx';
import { fetchPropiedades } from '../redux/actions';

class PropiedadesLista extends Component {
	
	componentDidMount() {
		this.props.fetchPropiedades();
	}

	render() {
		return(
			<Propiedades propiedades={this.props.propiedades} />
		);
	}
}


PropiedadesLista.propTypes ={
	propiedades: PropTypes.array.isRequired,
	fetchPropiedades: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		propiedades: state.propiedades
	}
}


export default withRouter(connect(mapStateToProps, { fetchPropiedades })(PropiedadesLista));

