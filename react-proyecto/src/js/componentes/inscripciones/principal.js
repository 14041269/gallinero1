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
activo=false;
	constructor()
	{
		super();

		this.state={

			datosAlumnos:{
				img:"",
				nombre:"",
				ap:"",
				am:"",
				fechanac:"",
				edad:"",
				sexo:"",
				estado:"",
				municipio:"",
				calle:"",
				colonia:"",
				numerocasa:"",
				tel:"",
				cel:"",
				correo:"",
				curp:""},
			datosTutor:{
				nombre:"",
				ap:"",
				am:"",
				telefono:"",
				correo:""
			},
			datosInscripciones:{
				nocontrol:"",
				nivelescolar:"",
				gradoescolar:"",
				periodoescolar:"",
				solicitudbeca:""
			},
			activoBuscar:false,	
			activoNuevo:false



		}
		this._searchStudent=this._searchStudent.bind(this);
	}


	_searchStudent(nocontrol){
		 // //(nocontrol);
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
            	////("sfsadf");
             this.setState({datosAlumnos:{img:resp.DATOSALUMNOS.IMG,
             								nombre:resp.DATOSALUMNOS.NOMBRE,
             								ap:resp.DATOSALUMNOS.AP,
             								am:resp.DATOSALUMNOS.AM,
             								fechanac:resp.DATOSALUMNOS.FECHANAC,
             								edad:resp.DATOSALUMNOS.EDAD,
             								sexo:resp.DATOSALUMNOS.SEXO,
             								estado:resp.DATOSALUMNOS.ESTADO,
             								municipio:resp.DATOSALUMNOS.MUNICIPIO,
             								calle:resp.DATOSALUMNOS.CALLE,
             								colonia:resp.DATOSALUMNOS.COLONIA,
             								numeroCasa:resp.DATOSALUMNOS.NUMEROCASA,
             								tel:resp.DATOSALUMNOS.TEL,
             								cel:resp.DATOSALUMNOS.CEL,
             								correo:resp.DATOSALUMNOS.CORREO,
             								curp:resp.DATOSALUMNOS.CURP
             								}});
             this.setState({datosTutor:{
             		nombre:resp.DATOSTUTOR.NOMBRE,
					ap:resp.DATOSTUTOR.AP,
					am:resp.DATOSTUTOR.AM,
					telefono:resp.DATOSTUTOR.TEL,
					correo:resp.DATOSTUTOR.CORREO
             }});
             this.setState({datosInscripciones:{
	             	nocontrol:resp.DATOSINSCRIPCIONES.NOCONTROL,
					nivelescolar:"",
					gradoescolar:"",
					periodoescolar:"",
					solicitudbeca:""
             }});
            
             this.setState({activoBuscar:true,
             				activoNuevo:false});

          	}.bind(this),
          	error: function(resp)
          	{
          		
          	}
      });

     }

     onClickHandler(event)
     {
     	event.preventDefault();

     	if(event.target.name=="registrarNuevo")
     	{
     		////("Entrando");
     		this.cleanInputs();
     		
     	}


     }

    cleanInputs()	//Limpiar todos los inputs tanto en el caso de limpiar como en el de registrar nuevo alumno
    {
    		this.setState({
			activoBuscar:false,	
			activoNuevo:true
			});	
    }
    search()
    {
    	
    	return (

    	<div>
    	<form method="get">
    				<DatosAlumnos datosAlumnos={this.state.datosAlumnos} buscarExistente={this.state.activoBuscar}/>
					
					<DatosTutor datosTutor={this.state.datosTutor}/>
					
					<DatosInscripciones datosInscripciones={this.state.datosInscripciones}/>

					<div className="container">
						<div className="col-lg-12">
							<div className="row">
								<div className="col-md-3"></div>
								<div className="col-md-3">
									<input type="submit"  value="Registrar alumno" className="btn btn-secondary"/>
								</div>
								<div className="col-md-3">
									<input 
									type="submit" 
									value="Limpiar"
									className="btn btn-secondary"/>
								</div>
								<div className="col-md-3"></div>
							</div>
						</div>
					</div>
		</form>
		</div>
    		);





    }

	render()
	{
		var registro= this.search();

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
									<input type="button" className="btn btn-primary"
									name="registrarNuevo" 
									onClick={this.onClickHandler.bind(this)} 
									value="Registrar nuevo alumno"/>
								</div>
							</div>
						</div>
					</div>
					
				{registro}
				
					



				</div>

			</div>
			);
	}

}

export default Principal;



