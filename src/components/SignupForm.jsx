import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import { userSignUp } from '../redux/actions';


class SignUpForm extends Component{	
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			passwordConfirmation: '',
			redirect: false
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount(){
		$('#modal1').modal('open');
	}

	handleChange(e){
		this.setState({ [e.target.name]: e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		if(this.state.password ===  this.state.passwordConfirmation)
		{
			console.log(this.state);
			this.props.userSignUp(this.state);
			this.setState({ redirect: true });
		}
		else
		{
			console.log("Los passwords no coinciden");
		}
		this.setState({
			redirect: true
		});		
	}

	render(){
		const form =(
					    <div className="modal-content">
						    <form onSubmit={this.handleSubmit} className="col s12">
							 <div className="row">
							    <div className="input-field col s12">
							      <input id="email" type="email" name="email" value={this.state.email} onChange={this.handleChange} className="validate" />
							      <label htmlFor="email">Email</label>
							    </div>
							  </div>    	
							  <div className="row">
							    <div className="input-field col s12">
							      <input id="password" type="password" name="password" value={this.state.password} onChange={this.handleChange} className="validate" />
							      <label htmlFor="password">Password</label>
							    </div>
							  </div>
							  <div className="row">
							    <div className="input-field col s12">
							      <input id="passwordConfirmation" type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} className="validate" />
							      <label htmlFor="passwordConfirmation">Password Confirmation</label>
							    </div>
							  </div>
							  <div className="modal-footer">
						      <button type="submit" className="modal-action modal-close waves-effect waves-green btn-flat left">Registrate</button>
						      <Link to="/" className="modal-action modal-close waves-effect waves-green btn-flat rigtht">Cancel</Link>
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


SignUpForm.propTypes ={
	userSignUp: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		user: state
	}
}


export default withRouter(connect(mapStateToProps, { userSignUp })(SignUpForm));