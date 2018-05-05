import React, { Component } from 'react';

class EditarUsuario extends Component {

	constructor(){
		super();
	}

	render(){
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
								</tr>
							</tbody>
						</table>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
export default EditarUsuario;
