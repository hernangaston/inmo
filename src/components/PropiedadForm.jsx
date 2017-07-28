import React, { Component } from 'react';
import axios from 'axios';


var arr=[];
//feromulario para agregar una propiedad al sistema


class PropiedadForm extends Component {	
	constructor(props) {
		super(props);
		this.state = {
			_id: this.props.propiedad ? this.props.propiedad._id : null,
			titulo: this.props.propiedad ? this.props.propiedad.titulo : '',
			precio: this.props.propiedad ? this.props.propiedad.precio : '',
			descripcion: this.props.propiedad ? this.props.propiedad.descripcion : '',
			fotos: this.props.propiedad ? this.props.propiedad.fotos : [],			
			errores: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handle = this.handle.bind(this);
		this.handleFoto = this.handleFoto.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			_id: nextProps.propiedad._id,
			titulo: nextProps.propiedad.titulo,
			precio: nextProps.propiedad.precio,
			descripcion: nextProps.propiedad.descripcion,
			fotos: nextProps.propiedad.fotos
		})
	}

	handle(e){
		this.setState({ [e.target.name]: e.target.value });
		if(typeof this.state.titulo != "string" ){

		}				
	}

	//manejador de las imagenes que subo 
	//uso una funcion para subirlas als servidor
	handleFoto(e){
		var formData = new FormData();

		for(var i = 0; i < e.target.files.length; i++){
			//console.log(e.target.files[i].name);
			var file = e.target.files[i];
			formData.append([e.target.name], file, file.name);
			arr.push(file.name);
		};


		//this.props.uploadImage(formData);
		axios({
			method: 'post',
			url: '/upload',
			data: formData,
		})
		/*.then((res) => { console.log("Exito: " + res);})
		.catch((err) => { console.log("Error" + err);});*/
	}


	handleSubmit(e){
		e.preventDefault();

		const { titulo, precio, descripcion } = this.state;
		
		this.props.savePropiedad({ titulo, precio, descripcion });	
	}

	render() { 	
		const form = (<form className="col s6 offset-s3" encType="multipart/form-data" onSubmit={this.handleSubmit} >
		        <div className="input-field col s12">
		          <label htmlFor="titulo">Titulo</label>
		          <input 
		           id="titulo"
		           name="titulo"
		           type="text"
		           onChange={this.handle}
		           value={this.state.titulo} />
		        </div>		        		        
		        <div className="input-field col s12">
		          <label htmlFor="precio">Precio</label>
		          <input 
		           id="precio"
		           name="precio"
		           type="text"
		           onChange={this.handle}
		           value={this.state.precio} />
		        </div>
		        <div className="input-field col s12">
		          <label htmlFor="textarea">Descripcion</label>
		          <textarea 
		           id="descripcion"
		           className="materialize-textarea"
		           name="descripcion"
		           onChange={this.handle}
		           value={this.state.descripcion}></textarea>
		        </div>
		        <div className="file-field input-field col s12">
		          <div className="btn">
		           <span>File</span>
		           <input type="file" name="fotoInput" onChange={this.handleFoto} multiple />
		          </div>
		          <div className="file-path-wrapper">
		           	<input className="file-path validate" type="text" placeholder="Upload one or more files" />
		          </div>
		        </div>		          
		      <button className="btn">Enviar</button>
		    </form>);
		return(<div className="container">{ form }</div>);
	}
}



export default PropiedadForm;


