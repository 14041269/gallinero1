
import React, {Component} from 'react';
import '../../../css/InscripcionesBuscar.css';

class BuscarAlumno extends Component{

	constructor()
	{
		super();
		this.state={
			nocontrol:{
				valor:"",
				validated:false}
		}
		////("buscaralumnos");
	}
	_submitListener(event)
	{
		//console.log("ahsdfasd");
		event.preventDefault();
		
			let nocontrol =this._nocontrol.value;
			this.props.searchStudent(nocontrol);
	


	}
	onChangeHandler(event)
	{
		event.preventDefault();
		this.setState({nocontrol:{valor:event.target.value,validated:false}});
		

	}

	render()
	{
		return(
				<div className="container">
					<div className="col-md-8">
						<form method="get" onSubmit={this._submitListener.bind(this)}>
							<div className="row">
								<div className="col-md-4">
									<input 
									type="text"   
									maxLength="10" 
									className="form-control"
									minLength="10"
									name="nocontrol" ref={(input) => this._nocontrol = input} 
									placeholder="N° de control"
									onChange={this.onChangeHandler.bind(this)}
									pattern="^[0-9]{10}"
									title="El número de control esta compuesto únicamente de caracteres numéricos y de longitud 10"
									//onInvalid=setCustomValidity("solo numeros")
									required/>
								</div>
								<div className="col-md-4">
									<input type="submit"  
									value={this.props.nombre}   
									className="btn btn-primary" />
								</div>
							</div>
						</form>
					</div>
				</div>

			);
	}

}



export default BuscarAlumno;