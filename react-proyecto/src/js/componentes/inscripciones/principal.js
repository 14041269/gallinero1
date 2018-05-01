import React, { Component } from 'react';
import DatosAlumnos from './datosAlumnos';
import BotonesInicio from './botonesInicio';
import DatosInscripciones from './datosInscripciones';
import DatosTutor from './datosTutor.js';
import Navigation from '../navigation';
import '../../../css/Inscripciones.css';
import BuscarAlumno from './buscarAlumno';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;


class Principal extends Component {

	constructor()
	{
		super();

		this.state={

			datosAlumnos:[]

		}
	}


	_searchStudent(nocontrol){
		  alert(nocontrol);
          const datos = {
            "accion": "select",
            "nocontrol":nocontrol+""
          }

          jquery.ajax({

            "url": "http://localhost:80/insertar.php",
            "data": datos,
            "method": "GET",
            "crossDomain": true,
    		"dataType":'json',

            success: function(resp){
            // JSON.parse(resp);
             alert(resp.NOCONTROL);
             //this.setState({mensajes: this.state.mensajes.concat([resp])});
          	},
          	error: function(resp)
          	{
          		alert();
          	}
      });

     }




	render()
	{
		return(
			<div>
			<Navigation/>
				<div className="contenedor-inscripciones">
					
					
					{/* <BotonesInicio nombreBotones={["Buscar Alumno","Registrar nuevo Alumno"]} searchStudent={this._searchStudent.bind(this)}/> */}
					<div className="container">
						<div className="col-lg-12 well">
							<h1>Registro de inscripcion</h1>	
							<div className="row">
								<div className="col-md-8">
									<BuscarAlumno nombre={"Buscar"} searchStudent={this._searchStudent.bind(this)}/>
								</div>
								<div className="col-md-4">
									<input type="button" className="btn btn-primary" value="Registrar nuevo alumno"/>
								</div>
							</div>
						</div>
					</div>
					<DatosAlumnos />
					
					<DatosTutor />
					
					<DatosInscripciones/>

					<div className="container">
						<div className="col-lg-12">
							<div className="row">
								<div className="col-md-3"></div>
								<div className="col-md-3">
									<input type="submit" value="Registrar alumno" className="btn btn-secondary"/>
								</div>
								<div className="col-md-3">
									<input type="submit" value="Limpiar" className="btn btn-secondary"/>
								</div>
								<div className="col-md-3"></div>
							</div>
						</div>
					</div>
					

				</div>

			</div>
			);
	}

}

export default Principal;



