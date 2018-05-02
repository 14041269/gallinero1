import React, {Component } from 'react';
import EditarUsuario from './editarU';
import Navigation from '../navigation';
import '../../../css/edicion.css';

class Edicion extends Component {
	constructor()
	{
		super();
		this.state={
			editarU:[]
		}
	}

	render(){
		return(
			<div>
				<Navigation/>
				<div className="contenedorEdicion">
					<h1>CONFIGURACIÓN DE ACCESO</h1>
					<h2>Editar Usuario</h2>
					<EditarUsuario/>
				</div>
			</div>
		);
	}
}

export default Edicion;