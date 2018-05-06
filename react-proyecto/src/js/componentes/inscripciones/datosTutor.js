import React, { Component } from 'react';


class DatosTutor extends Component{
	constructor(props)
	{
		super(props);
		this.state={datosTutor:this.props.datosTutor};
	}
		onChangeHandler(event)	//Para actualizar el estado al momento de escribir algo en el campo 
	{
		event.preventDefault();

		this.setState({datosTutor:{[event.target.name]: event.target.value }});
		

	}

	render()
	{
		return(

				<div className="container">
					<div className="col-lg-12 well">
					<h2>Datos del tutor</h2>

					<div className="row">
						<div className="col-md-4">
							<label >Nombre
								<input 
								type="text" 
								name="nombreTutor" 
								className="nombre"
								onChange={this.onChangeHandler.bind(this)}
								value={this.state.datosTutor.nombre}  
								required/>
							</label>
						</div>
						<div className="col-md-4">
							<label >Apellido paterno
								<input type="text" name="apTutor" className="nombre" required/>
							</label>
						</div>
						<div className="col-md-4">
							<label >Apellido materno
								<input type="text" name="amTutor" className="nombre" required/>
							</label>
						</div>
					</div>

					<div className="row">
						<div className="col-md-4">
							<label >Teléfono
								<input 
								type="tel" 
								name="telefonoTutor" 
								
								required/>
							</label>
						</div>
						<div className="col-md-4">
							<label >Correo
								<input 
								type="email" 
								name="correoTutor" 
								placeholder="ejemplo@gmail.com"
								required/>
							</label>
						</div>
						<div className="col-md-4"></div>
					</div>
						

					

						
				</div>
				</div>

			);
	}

}


export default DatosTutor