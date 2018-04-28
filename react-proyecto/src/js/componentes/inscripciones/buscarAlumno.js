import React, {Component} from 'react';


class BuscarAlumno extends Component{

	constructor()
	{
		super();
		
		this.state={
			control:""
		}
	}

	render()
	{
		return(
				<div className="BuscarAlumno">
					<form>
						<input type="submit" value={this.props.nombre}  className="btn btn-primary btn-sizeBI"/>
						<input type="text" maxlength="10" name="nocontrol" />
					</form>
				</div>

			);
	}

}



export default BuscarAlumno;