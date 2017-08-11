import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import PropiedadesLista from './PropiedadesLista.jsx';
import PropiedadFormPage from './PropiedadFormPage.jsx';
import PropiedadPage from './PropiedadPage.jsx';
import LoginForm from './LoginForm.jsx';
import SignUpForm from './SignupForm.jsx';

export default class App extends Component {
	render(){
		return (
			<div>
				<header>	
					<Navigation />
				</header>
				<aside>

				</aside>
				<section>
					<article>				
					 <Route exact path="/" component={ PropiedadesLista } />
					 <Route path="/PropiedadFormPage" component={ PropiedadFormPage } />
					 <Route path="/propiedad/:_id"  component={ PropiedadPage } />
					 <Route path="/login"  component={ LoginForm } />
					 <Route path="/signup"  component={ SignUpForm } />
					</article>
				</section>						
			</div>
		);
	}
}
