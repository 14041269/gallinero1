import React, { Component } from 'react';


class DatosAlumnos extends Component {
	
	constructor()
	{
		super();

	}

	render()
	{
		return(
				<div className="inscripciones">

					
						<label >Nombre: 
							<input type="text" className="nombre" required/>
						</label>
						<label >Apellido paterno: 
							<input type="text" className="ap" required/>
						</label>
						<label >Apellido materno: 
							<input type="text" className="nombre" required/>
						</label>
						<label >Fecha de nacimiento: 
							<input type="date" className="fechanac" required/>
						</label>
						<label >Edad: 
							<input type="text" className="edad" required/>
						</label>
						<label >Sexo: <br/>
							H<input type="radio" className="nogrid" value="" required/> 
							M<input type="radio" className="nogrid" value="" required/> 
						</label> 
						<label >Calle: 
							<input type="text" className="calle" required/>
						</label> 
						<label >Colonia: 
							<input type="text" className="colonia" required/>
						</label> 
						<label >N°      
							<input type="text" className="numerocasa" required/>
						</label> 
						<label >Número de telefono: 
							<input type="tel" className="numerotelefono" />
						</label> 
						<label >Número de celular: 
							<input type="tel" className="numerocelular" />
						</label> 
						<label >Correo 
							<input type="email" className="correo" />
						</label> 

					

				</div>
			);
	}

}

export default DatosAlumnos;