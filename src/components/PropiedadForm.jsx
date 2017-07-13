import React, { Component } from 'react';

class PropiedadForm extends Component {	
	constructor(props) {
		super(props);
		this.state = {
			//_id: this.props.propiedad ? this.props.propiedad._id : null,
			titulo: this.props.propiedad ? this.props.propiedad.titulo : '',
			precio: this.props.propiedad ? this.props.propiedad.precio : '',
			descripcion: this.props.propiedad ? this.props.propiedad.descripcion : '',			
			errores: false,
			fotoInput: ''
		};
	}



	componentWillReceiveProps(nextProps) {
		this.setState({
			//_id: nextProps.propiedad._id,
			titulo: nextProps.propiedad.titulo,
			precio: nextProps.propiedad.precio,
			descripcion: nextProps.propiedad.descripcion
		})
	}


	handle(e){
		//console.log({ [e.target.name]: e.target.value });
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e){
		e.preventDefault();	
		const { titulo, precio, descripcion } = this.state;
		this.props.savePropiedad({ titulo, precio, descripcion });
		console.log("Enviada");
	}

	render() { 	
		const form = (
		    <form action="POST" className="col s6 offset-s3" onSubmit={this.handleSubmit.bind(this)} >
		      <div className="row">
		        <div className="input-field col s12">
		          <input 
		           placeholder="Placeholder"
		           id="titulo"
		           className={this.state.valid}
		           name="titulo"
		           type="text"
		           onChange={this.handle.bind(this)}
		           value={this.state.titulo} />
		          <label htmlFor="titulo">Titulo</label>
		        </div>		        		        
		        <div className="input-field col s12">
		          <input 
		           placeholder="Placeholder"
		           id="precio"
		           className="invalid"
		           name="precio"
		           type="text"
		           onChange={this.handle.bind(this)}
		           value={this.state.precio} />
		          <label htmlFor="precio">Precio</label>
		        </div>
		        <div className="input-field col s12">
		          <textarea 
		           id="descripcion"
		           className="materialize-textarea"
		           name="descripcion"
		           onChange={this.handle.bind(this)}
		           value={this.state.descripcion}></textarea>
		          <label htmlFor="textarea">Descripcion</label>
		        </div>
		      </div>
		      <button className="btn">Enviar</button>
		    </form>);
		return(<div className="container">{ form }</div>);
	}
}



export default PropiedadForm;

