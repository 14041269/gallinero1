import React, {Component} from 'react';
import BuscarAlumno from './buscarAlumno'
import '../../../css/InscripcionesBuscar.css';


class BotonesInicio extends Component {
	constructor()
	{

		super();

		this.state={
			numero:''
		}
		
	}   



render (){
		return(

			<div className = "registroBI">
				<BuscarAlumno nombre={this.props.nombreBotones[0]} searchAlumno={this.props.searchAlumno}/>
				<button type="button" className="btn btn-primary botonesBI btn-sizeBI">{this.props.nombreBotones[1]}</button>
			</div>
		);
	}
}

export default BotonesInicio;