import React, { Component } from 'react';


class DatosAlumnos extends Component {
	
	constructor()
	{
		super();
		this.state={

			mensajes:[]
		}

	}

	

	render()
	{
		return(
				<div className="inscripciones">

					
						<label >Nombre
							<input type="text" name="nombre" required/>
						</label>
						<label >Apellido paterno 
							<input type="text" name="ap" required/>
						</label>
						<label >Apellido materno 
							<input type="text" name="nombre" required/>
						</label>
						<label >Fecha de nacimiento 
							<input type="date" name="fechanac" required/>
						</label>
						<label >Edad 
							<input type="text" name="edad" required/>
						</label>
						<label >Sexo <br/>
							H<input type="radio" name="sexo" className="nogrid" value="" required/> 
							M<input type="radio" name="sexo" className="nogrid" value="" required/> 
						</label> 
						<label>
							Estado 						
							<select className="combobox">

							</select>
						</label>
						<label>
							Municipio 						
							<select className="combobox">
							  <option></option>
							  <option value="PA">{this.props.estados}</option>
							  <option value="CT">Connecticut</option>
							  <option value="NY">New York</option>
							  <option value="MD">Maryland</option>
							  <option value="VA">Virginia</option>
							</select>
						</label>
						<label >Calle 
							<input type="text" name="calle" required/>
						</label> 
						<label >Colonia 
							<input type="text" name="colonia" required/>
						</label> 
						<label >N°      
							<input type="text" name="numerocasa" required/>
						</label> 
						<label >Número de telefono 
							<input type="tel" name="numerotelefono" />
						</label> 
						<label >Número de celular 
							<input type="tel" name="numerocelular" />
						</label> 
						<label >Correo 
							<input type="email" name="correo" />
						</label> 
						<label >Curp 
							<input 	type="text" 
									name="correo" 
									onChange={this.handle_change}/>
						</label> 
					

				</div>
			);
	}

}

export default DatosAlumnos;