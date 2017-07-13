<div className="file-field input-field col s12">
	<div className="btn">
		<span>File</span>
		<input type="file"
		id="fotoInput"
		name="fotoInput"
		value={this.state.fotoInput}
		onChange={this.handle.bind(this)}/>
	</div>
</div>

<button className="btn" onClick={this.agregar.bind(this)}>
	Agregar otra foto:<i className="material-icons">add_a_photo</i>
</button>