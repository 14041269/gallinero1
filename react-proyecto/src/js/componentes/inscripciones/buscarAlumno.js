
import React, {Component} from 'react';
import '../../../css/InscripcionesBuscar.css';

class BuscarAlumno extends Component{

	constructor()
	{
		super();
		this.state={
			nocontrol:''
		}
		//alert("buscaralumnos");
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
		this.setState({nocontrol:event.target.value});

	}
	nocontrolValidation()
	{
		
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
									minLength="10"
									name="nocontrol" ref={(input) => this._nocontrol = input} 
									placeholder="N° de control"
									onChangeHandler={this.onChangeHandler.bind(this)} 
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