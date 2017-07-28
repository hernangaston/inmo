import React, { Component } from 'react';

export default class LoginForm extends Component{	

	componentDidMount(){
		$('#modal1').modal('open');
	}



	render(){
		return (
			<div id="modal1" className="modal">
			    <div className="modal-content">
				    <form className="col s12">
					 <div className="row">
					    <div className="input-field col s12">
					      <input id="email" type="email" className="validate" />
					      <label htmlFor="email">Email</label>
					    </div>
					  </div>    	
					  <div className="row">
					    <div className="input-field col s12">
					      <input id="password" type="password" className="validate" />
					      <label htmlFor="password">Password</label>
					    </div>
					  </div>
					  <div className="modal-footer">
				      <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
				      </div>
					</form>
			    </div>
		  </div>
		)
	}
}
