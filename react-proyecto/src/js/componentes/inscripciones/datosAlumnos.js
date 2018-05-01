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
				<div className="container">
				<div className="col-lg-12 well">
				<h2>Datos del alumno</h2>
				<div className="row justify-content-md-center">
					<div className="col-md-4"></div>
					<div className="col-md-4 ">
						<img src="../../../img/default.png" className="img-picker"/>
						<input type="file" name="foto" required/>
					</div>
					<div className="col-md-4"></div>

				</div>
				<div className="row">
						
						<div className="col-md-4">
							<label >Nombre
								<input type="text" name="nombre" required/>
							</label>
						</div>
						<div className="col-md-4">
							<label >Apellido paterno 
								<input type="text" name="ap" required/>
							</label>
						</div>
						<div className="col-md-4">
							<label >Apellido materno 
								<input type="text" name="nombre" required/>
							</label>
						</div>
				</div>
				<div className="row">

					<div className="col-md-4">
						<label >Fecha de nacimiento 
							<input type="date" name="fechanac" required/>
						</label>
					</div>
					<div className="col-md-4">
						<label >Edad 
							<input type="text" name="edad" required disabled/>
						</label>
					</div>
					<div className="col-md-4">
						<label >Sexo <br/>
							H<input type="radio" name="sexo" className="nogrid" value="" required/> 
							M<input type="radio" name="sexo" className="nogrid" value="" required/> 
						</label> 
					</div>
				</div>


				<div className="row">
					<div className="col-md-4">
						<label>
							Estado 						
							<select className="combobox">

							</select>
						</label>
					</div>

					<div className="col-md-4">
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
					</div>
					<div className="col-md-4">
						<label >Calle 
							<input type="text" name="calle" required/>
						</label> 
					</div>
				</div>






				<div className="row">
					<div className="col-md-4">
							<label >Colonia 
								<input type="text" name="colonia" required/>
							</label> 
					</div>
					<div className="col-md-4">
						<label >N°      
							<input type="text" name="numerocasa" required/>
						</label> 
					</div>
					<div className="col-md-4">
						<label >Número de telefono 
							<input type="tel" name="numerotelefono" />
						</label> 
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<label >Número de celular 
							<input type="tel" name="numerocelular" />
						</label> 
					</div>
					<div className="col-md-4">
						<label >Correo 
							<input 
							type="email" 
							name="correo" 
							placeholder="ejemplo@gmail.com"/>
						</label> 
					</div>
					<div className="col-md-4">
						<label >Curp 
							<input 	type="text" 
									name="correo" 
									onChange={this.handle_change}
									maxLength="18"
									minLength="18"/> 
									
						</label> 
					</div>
				</div>
						
						
						
						
						
						
					
						</div>
				</div>
			);
	}

}

export default DatosAlumnos;