import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import PropiedadesLista from './PropiedadesLista.jsx';
import PropiedadFormPage from './PropiedadFormPage.jsx';
import LoginForm from './LoginForm.jsx';

export default class App extends Component {
	render(){
		return (
			<div>	
				<Navigation />
				<Route path="/propiedades" component={ PropiedadesLista } />
				<Route path="/PropiedadForm" component={ PropiedadFormPage } />
				<Route path="/LoginForm" component={ LoginForm } />			
			</div>
		);
	}
}
