import React, { Component } from 'react';


class DatosInscripciones extends Component {
	
	constructor()
	{
		super();

	}

	render()
	{
		return(
				<div className="datosInscripciones">


					<label>
						N° Control: <input type="text" name="nombre" required/>
					</label>



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

					<label>
						Periodo Escolar: <input type="text" name="nombre" required/>
					</label>

					<label>
						Solicitud de beca: <input type="checkbox" className="nogrid" name="nombre" />
					</label>

				</div>
			);
	}

}

export default DatosInscripciones;