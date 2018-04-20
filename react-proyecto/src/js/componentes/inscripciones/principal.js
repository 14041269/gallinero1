import React, { Component } from 'react';
import DatosAlumnos from './datosAlumnos';
import BotonesInicio from './botonesInicio';
import DatosInscripciones from './datosInscripciones';
import '../../../css/Inscripciones.css';

class Principal extends Component {

	constructor()
	{
		super();
	}

	render()
	{
		return(

				<div className="contenedor-inscripciones">

					<h1>Registro de inscripcion</h1>
					<BotonesInicio cualquiera={"njhvnvjhf"}/>
					<h2>Datos del alumno</h2>
					<DatosAlumnos/>
					<h2>Datos escolares</h2>
					<DatosInscripciones/>
					
				</div>

			);
	}

}

export default Principal;



