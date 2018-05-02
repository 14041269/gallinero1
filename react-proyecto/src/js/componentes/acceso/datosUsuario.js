import React, { Component } from 'react';

class DatosUsuario extends Component {
		
	constructor(){
		super();
	}
	
	render(){
		return(
			<div className = "acceso">
				<label >Nombre
					<input type="text" name="nombre" required/>
				</label>
				<label >Apellido Paterno
					<input type="text" name="ap" required/>
				</label>
				<label >Apellido Materno
					<input type="text" name="ap"/>
				</label>
				<label>	Cargo: 
					<select className="combobox">
						{/*<option>Seleccione Cargo</option>*/}	
						<optgroup label="Seleccione Cargo">
							<option value="AD">Administrador</option>
							<option value="CO">Coordinador</option>
							<option value="DI">Director</option>
							<option value="FN">Financiero</option>
							<option value="SC">Secretario</option>
						</optgroup>
					</select>
				</label>
				<label>	Departamento: 
					<select className="combobox">
						{/*<option> Seleccione Departamento </option>*/}
						<optgroup label="Seleccione Departamento">
							<option value="AD">Departamento1</option>
							<option value="CO">Departamento2</option>
							<option value="DI">Departamento3</option>
							<option value="FN">Departamento4</option>
							<option value="SC">Departamento5</option>
						</optgroup>
					</select>
				</label>
			</div>
		);	
	}
		
}
export default DatosUsuario;