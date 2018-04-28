import React, { Component } from 'react';
import DatosAlumnos from './datosAlumnos';
import BotonesInicio from './botonesInicio';
import DatosInscripciones from './datosInscripciones';
import DatosTutor from './datosTutor.js';
import Navigation from '../navigation';
import '../../../css/Inscripciones.css';
import jquery from '../../../jquery';
window.$ = window.jQuery = jquery;


class Principal extends Component {

	constructor()
	{
		super();
		this.state={

			datosAlumnos:[]

		}
	}

	_buscarAlumno(nocontrol){

          const datos = {
            "accion": "select",
            "nocontrol":nocontrol+""
          }

          jquery.ajax({
            "url": "http://192.168.99.155/insertar.php",
            "data": datos,
            "method": "post",
            success: function(resp){
              alert(resp);
              //this.setState({mensajes: this.state.mensajes.concat([resp])});
          }});

     }

	render()
	{

		return(
			<div>
			<Navigation/>


				<div className="contenedor-inscripciones">
					<h1>Registro de inscripcion</h1>
					
					<BotonesInicio nombreBotones={["Buscar Alumno","Registrar nuevo Alumno"]} />
					<h2>Datos del alumno</h2>
					<DatosAlumnos />
					<h2>Datos del tutor</h2>
					<DatosTutor />
					<h2>Datos escolares</h2>
					<DatosInscripciones/>
					<BotonesInicio nombreBotones={["Registrar","Limpiar"]}/>

					
				</div>

			</div>
			);
	}

}

export default Principal;



