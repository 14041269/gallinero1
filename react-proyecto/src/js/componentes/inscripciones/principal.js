import React, { Component } from 'react';
import DatosAlumnos from './datosAlumnos';
import BotonesInicio from './botonesInicio';
import DatosInscripciones from './datosInscripciones';
import DatosTutor from './datosTutor.js';
import Navigation from '../navigation';
import '../../../css/Inscripciones.css';

class Principal extends Component {

	constructor()
	{
		super();
	}

	render()
	{
		return(
			<div>
			<Navigation/>


				<div className="contenedor-inscripciones">
					<h1>Registro de inscripcion</h1>
					<BotonesInicio cualquiera={"Botones"} />
					<h2>Datos del alumno</h2>
					<DatosAlumnos esatdos={["Durango","CDMX"]}/>
					<h2>Datos del tutor</h2>
					<DatosTutor />
					<h2>Datos escolares</h2>
					<DatosInscripciones/>
					
				</div>

			</div>
			);
	}

}

export default Principal;



