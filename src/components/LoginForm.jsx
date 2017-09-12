import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default class LoginForm extends Component{	
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			redirect: false
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount(){
		$('#modal1').modal('open');
		var prueba = $('#email').css('color');
		console.log("Color: " + prueba);
	}

	handleChange(e){
		this.setState({ [e.target.name]: e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		console.log("Log in");
	}

	render(){
		const form =(
					    <div className="modal-content">
						    <form action="POST" onSubmit={this.handleSubmit} className="col s12">
							 <div className="row">
							    <div className="input-field col s12">
							      <input className="red" id="email" type="email" name="email" value={this.state.email} onChange={this.handleChange} className="validate" />
							      <label htmlFor="email">Email</label>
							    </div>
							  </div>    	
							  <div className="row">
							    <div className="input-field col s12">
							      <input id="password" type="password" name="password" value={this.state.password} onChange={this.handleChange} className="validate" />
							      <label htmlFor="password">Password</label>
							    </div>
							  </div>
							  <div className="modal-footer">
						      <button type="submit" className="modal-action modal-close waves-effect waves-green btn-flat left">Login</button>
						      <Link to="/signup" className="modal-action modal-close waves-effect waves-green btn-flat center">Registrate</Link>
						      <Link to="/" className="modal-action modal-close waves-effect waves-green btn-flat rigtht">Forgot Password?</Link>
						      </div>
							</form>
					    </div>
				  );
		const redir = (<Redirect to='/'></Redirect>);
		return (
			<div id="modal1" className="modal">{ this.state.redirect ? redir : form }</div>
		);
	}
}
