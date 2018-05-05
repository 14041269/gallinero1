import React, { Component } from 'react';

class DatosUsuario extends Component {

	constructor(){
		super();
	}

	render(){
		return(
			<div className = "conteiner">
				<div className="col-lg-12 well">
					<h2>Crear Usuario</h2>
					<h3>Datos Generales:</h3>
					<div className="row">
						<div className="col-md-4">
								<label >Nombre
									<input type="text" name="nombre" required/>
								</label>
						</div>
						<div className="col-md-4">
								<label >Apellido Paterno
									<input type="text" name="ap" required/>
								</label>
						</div>
						<div className="col-md-4">
							<label >Apellido Materno
								<input type="text" name="ap"/>
							</label>
						</div>
						<div className="col-md-4">
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
						</div>
						<div className="col-md-4">
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
						</div> {/*col-md-4*/}
					</div> {/*row*/}
				</div> {/*col-lg-12 well*/}
			</div>
		);
	}
}

export default DatosUsuario;
