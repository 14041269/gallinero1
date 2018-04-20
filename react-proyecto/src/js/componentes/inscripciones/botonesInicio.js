import React, {Component} from 'react';

class BotonesInicio extends Component {
   constructor()
  {
    super();
    this.nombre=" Rafael Carbajal Galindo"
  }
	render (){
		return(

		<div className = "caja">
			<button type="button" className="btn btn-primary">{this.props.cualquiera}</button>
			<button type="button" className="btn btn-primary">{this.props.cualquiera}</button>
		</div>
		);
	}
}

export default BotonesInicio;