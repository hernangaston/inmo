import React, { Component } from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import store from './redux/store';



render((
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>), document.getElementById('app'));
