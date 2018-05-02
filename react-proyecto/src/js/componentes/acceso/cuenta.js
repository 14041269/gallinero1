import React, { Component } from 'react';

class Cuenta extends Component {
		
	constructor(){
		super();
	}
	
	render(){
		return(
			<div className = "cuenta">
				<label >Nombre de Usuario
					<input type="text" name="usuario" required/>
				</label>
				<label >Contraseña
					<input type="password" name="password" required/>
				</label>
			</div>
		);	
	}
		
}
export default Cuenta;