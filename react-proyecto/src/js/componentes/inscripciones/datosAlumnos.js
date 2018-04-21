import React, { Component } from 'react';


class DatosAlumnos extends Component {
	
	constructor()
	{
		super();
		this.state={

			mensajes:["Durango","Guadalajara","CDMX"]
		}

	}

	handle_change()
	{

	}
	_getComments(){   
       		
  /*     		return this.state.mensajes.map((mensaje) => {
       			return <h />
     });*/
       	}

	render()
	{
		return(
				<div className="inscripciones">

					
						<label >Nombre
							<input type="text" className="nombre" required/>
						</label>
						<label >Apellido paterno 
							<input type="text" className="ap" required/>
						</label>
						<label >Apellido materno 
							<input type="text" className="nombre" required/>
						</label>
						<label >Fecha de nacimiento 
							<input type="date" className="fechanac" required/>
						</label>
						<label >Edad 
							<input type="text" className="edad" required/>
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
							<input type="text" className="calle" required/>
						</label> 
						<label >Colonia 
							<input type="text" className="colonia" required/>
						</label> 
						<label >N°      
							<input type="text" className="numerocasa" required/>
						</label> 
						<label >Número de telefono 
							<input type="tel" className="numerotelefono" />
						</label> 
						<label >Número de celular 
							<input type="tel" className="numerocelular" />
						</label> 
						<label >Correo 
							<input type="email" className="correo" />
						</label> 
						<label >Curp 
							<input 	type="text" 
									className="correo" 
									onChange={this.handle_change}/>
						</label> 
					

				</div>
			);
	}

}

export default DatosAlumnos;