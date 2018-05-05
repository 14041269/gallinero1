import React, { Component } from 'react';

class Privilegio extends Component {

	constructor(){
		super();
	}

	render(){
		return(
			<div className = "conteiner">
				<div className="col-lg-12 well">
					<h2>Asignar Privilegio</h2>
					<div className="row">
						<div className="col-md-4">
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
						</div>
						<div className="col-md-6">
							<button onclick="" type="button" className="btn"> GUARDAR
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
export default Privilegio;
