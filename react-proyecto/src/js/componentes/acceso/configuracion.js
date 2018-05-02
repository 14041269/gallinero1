import React, {Component } from 'react';
import DatosUsuario from './datosUsuario';
import Cuenta from './cuenta';
import Privilegio from './privilegios';
import Navigation from '../navigation';
import '../../../css/configAcceso.css';

class Configuracion extends Component {
	constructor()
	{
		super();
		this.state={
			datosUsuario:[]
		}
	}

	render(){
		return(
			<div>
				<Navigation/>
				<div className="contenedor">
					<h1>CONFIGURACIÓN DE ACCESO</h1>
					<h2>Crear Usuario</h2>
					<h3>Datos Generales:</h3>
					<DatosUsuario/>
					<h3>Nuevo Usuario:</h3>
					<Cuenta/>
					<h2>Asignar Privilegio</h2>
					<Privilegio/>
				</div>
			</div>
		);
	}
}

export default Configuracion;
