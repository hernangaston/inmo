import React, { Component } from 'react';
import { render } from 'react-dom';
import { browswerHistory } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/App.jsx';
import store from './redux/store';

//const history = syncHistoryWithStore(browswerHistory, store);

render((
	<Provider store={store}>
		<Router>
			<Route path="/" component={App} />
		</Router>
	</Provider>), document.getElementById('app'));
