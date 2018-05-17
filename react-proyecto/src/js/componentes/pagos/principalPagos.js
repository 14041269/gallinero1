import React,{Component,Proptypes} from 'react'
import Navigation from '../navigation';
class Pagos extends Component{
	constructor()
	{
		super();
		this.state={
			nombre:"",
			noControl:"",
			nivelEscolar:"",
			GradoEscolar:"",
			fechaPago:""

		}
	}
	render()
	{
		return(
			<div>
				<Navigation/>
				<div className="contenedor-inscripciones">
					<div className="container">
						<div className="col-lg-12 well">
							<div className="row">
								<div className="col-lg-4">
									<button className="btn-primary btn-lg">Pagos mensualidades</button>
								</div>
								<div className="col-lg-4">
									<button className="btn-primary btn-lg">Pagos inscripciones</button>
								</div>
								<div className="col-lg-4">
									<button className="btn-primary btn-lg">Pagos documentos</button>
								</div>
								

							</div>
						</div>
					</div>
				</div>
			</div>
			);
	}
}

export default Pagos;