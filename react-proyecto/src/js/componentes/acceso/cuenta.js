import React, { Component } from 'react';

class Cuenta extends Component {

	constructor(){
		super();
	}

	render(){
		return(
			<div className = "conteiner">
				<div className="col-lg-12 well">
					<h3>Nuevo Usuario:</h3>
					<div className="row">
						<div className="col-md-4">
							<label >Nombre de Usuario
								<input type="text" name="usuario" required/>
							</label>
						</div>
						<div className="col-md-4">
							<label >Contraseña
								<input type="password" name="password" required/>
							</label>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
export default Cuenta;
