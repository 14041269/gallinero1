import React, {Component } from 'react';
/*import EditarUsuario from './editarU';*/
import Navigation from '../navigation';
import '../../../css/edicion.css';
import DatosUsuario from './datosUsuario';

class Edicion extends Component {

	constructor(props)
	{
		super(props);
		this.state={
			edicion:{
				nombre:"",
				ap:"",
				am:"",
				cargo:"",
				departamento:"",
				usuario:"",
				password:"",
				privilegio:[]
			},
			/*valores:["Nombre","Apellido Paterno","Apellido Materno","cargo","Departamento",
					"Nombre de Usuario","Contraseña","Privilegio"],*/
		}
	}
	

	edit(){
		return(
			<div className = "conteiner">
				<div className="col-lg-12 well">
					<h2>Editar Usuario</h2>
						<div className="row">
						<div className="col-md">
							<div class="panel-heading">
								<h3>Usuarios</h3>
								<div class="pull-left">
									<span class="clickable filter" data-container="body">
										<input type="text" class="form-control" id="dev-table-filter" data-action="filter" placeholder="Filtra Usuarios" />
									</span>
								</div>
								<div class="pull-rigth">
									<span class="clickable filter" data-container="body">
										<i class="glyphicon glyphicon-filter"></i>
									</span>
								</div>
						</div>
						</div>
					</div>
					<div className="row">
					<div className="col-md">
						<table class="table table-hover" id="dev-table">
							<thead>
								<tr>
									<th>#</th>
									<th>Nombre</th>
									<th>Apellido Paterno</th>
									<th>Apellido Materno</th>
									<th>Cargo</th>
									<th>Departamento</th>
									<th>Nombre de Usuario</th>
									<th>Contraseña</th>
									<th>Privilegio</th>
									
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Luisa</td>
									<td>Ramos</td>
									<td>Fraire</td>
									<td>Administrador</td>
									<td>Departamento1</td>
									<td>LuisaRF</td>
									<td>password</td>
									<td>Administrador</td>
								</tr>
							</tbody>
						</table>
						</div>
					</div>
				</div>
			</div>
		);
	}	

	render(){
		var editar= this.edit();
		return(
			<div>
				<Navigation/>
				<div className="contenedorEdicion">
					<h1>CONFIGURACIÓN DE ACCESO</h1>
					{editar}
					
					<DatosUsuario datos/>
					
				</div>
			</div>
		);
	}
}

export default Edicion;
