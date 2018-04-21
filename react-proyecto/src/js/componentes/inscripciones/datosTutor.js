import React, { Component } from 'react';


class DatosTutor extends Component{

	render()
	{
		return(

				<div>
						<label >Nombre
							<input type="text" name="nombreTutor" className="nombre" required/>
						</label>

						<label >Teléfono
							<input type="tel" name="nombreTutor" className="nombre" required/>
						</label>

						<label >Correo
							<input type="email" name="nombreTutor" className="nombre" required/>
						</label>
				</div>

			);
	}

}


export default DatosTutor