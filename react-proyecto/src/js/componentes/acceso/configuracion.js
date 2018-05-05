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
					<div className="container">
						<h1>CONFIGURACIÓN DE ACCESO</h1>
							<DatosUsuario/>
							<Cuenta/>
							<Privilegio/>
					</div>
				</div>
			</div>
		);
	}
}

export default Configuracion;
