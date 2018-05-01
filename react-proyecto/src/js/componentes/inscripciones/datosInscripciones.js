import React, { Component } from 'react';


class DatosInscripciones extends Component {
	
	constructor()
	{
		super();

	}

	render()
	{
		return(
				<div className="container">
				<div className="col-lg-12 well">
					<h2>Datos escolares</h2>
					<div className="row">
						
						<div className="col-md-4">
							<label>
								N° Control: <input type="text" name="nombre" required/>
							</label>
						</div>

						<div className="col-md-4">
						  	<label>	Nivel escolar: 
								<select className="combobox">
								  <option></option>
								  <option value="PA">Pennsylvania</option>
								  <option value="CT">Connecticut</option>
								  <option value="NY">New York</option>
								  <option value="MD">Maryland</option>
								  <option value="VA">Virginia</option>
								</select>
							</label>
					  	</div>
					  	<div className="col-md-4">
							<label>
								Grado Escolar: 						
								<select className="combobox">
								  <option></option>
								  <option value="PA">Pennsylvania</option>
								  <option value="CT">Connecticut</option>
								  <option value="NY">New York</option>
								  <option value="MD">Maryland</option>
								  <option value="VA">Virginia</option>
								</select>
							</label>
						</div>
					</div>
				<div className="row">
					
					<div className="col-md-4">
						<label>
							Periodo Escolar: <input type="text" name="nombre" required/>
						</label>
					</div>
					<div className="col-md-4">
						<label>
							Solicitud de beca: <input type="checkbox" className="nogrid" name="nombre" />
						</label>
					</div>
				</div>
				</div>
				</div>
			);
	}

}

export default DatosInscripciones;