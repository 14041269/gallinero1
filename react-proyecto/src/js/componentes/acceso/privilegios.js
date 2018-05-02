import React, { Component } from 'react';

class Privilegio extends Component {
		
	constructor(){
		super();
	}
	
	render(){
		return(
			<div className = "privilegio">
				<label>	Privilegio: 
					<select className="combobox">	
						<optgroup label="Seleccione Privilegio">
							<option value="AD">Administrador</option>
							<option value="CO">Coordinador</option>
							<option value="DI">Director</option>
							<option value="FN">Financiero</option>
							<option value="SC">Secretario</option>
						</optgroup>
					</select>
				</label>
				<button onclick="" type="button" className="btn"> GUARDAR
				</button>
			</div>
		);	
	}
		
}
export default Privilegio;