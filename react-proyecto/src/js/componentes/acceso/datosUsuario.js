import React, { Component } from 'react';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;

class DatosUsuario extends Component {

	constructor(props){
		super(props);
		this.state={
			datosUsuario:{
				nombre:"",
				ap:"",
				am:"",
				cargo:"",
				departamento:""
			},
			cuenta:{
				usuario:"",
				password:""
			},
			
				privilegios:[]
			,
			cargos:["Jefe","Subdelegado"],

			privi:["Administrador","Coordinador","Director","Financiero","Escolares"],

			departamentos:["Actividades Extrtaescolares",
							"Centro de Cómputo",
							"Desarrollo Académico",
							"Recursos Financieros",
							"Recursos Humanos",
							"Servicio Social",	
							"Servicios Escolares",
							"Sistemas y Computación"]
		};
	}

	onChangeHandler(event,datos)
	{
		//event.preventDefault();
		console.log(event.target.checked);


		let copy =Object.assign({},this.state);
		if(datos=="datosUsuario")
		{
			copy.datosUsuario[event.target.name]=event.target.value;
			this.setState({copy});
			/*console.log(event.target.name);*/
			console.log(copy.datosUsuario.cargo);
			console.log(copy.datosUsuario.departamento);

			//console.log("STATE: "+this.state.privilegios);

		}else if(datos=="cuenta")
		{
			copy.cuenta[event.target.name]=event.target.value;
			console.log(event.target.name);
			console.log(event.target.value);
		}
		else if(datos=="privilegios")
		{

			//copy.privilegios[event.target.name]=event.target.value;
			/*console.log(event.target.name);*/
			
			this.insertPrivilegio(event.target.checked,event.target.value);
			//console.log(event.target.value);
		}

		this.setState({copy});
		/*console.log(this.state.datosUsuario.nombre);
		console.log(this.state.privilegios.privilegio);*/
		//this.setState({datosUsuario:{[event.target.name]: event.target.value }});
	}

	
	getDepartamentos()
	{
		return(
				this.state.departamentos.map((departamento,i) =>
					<option
					value={departamento}
					key={i}
					> 
					{departamento}
					</option>
					)
			);
	}
		getCargos()
	{
		return(
				this.state.cargos.map((cargo,i) =>
					<option
					value={cargo}
					key={i}
					> 
					{cargo}
					</option>
					)
			);
	}

	getPrivilegios()
	{
		return(
			this.state.privi.map((privilegio,i) =>
				<option
					value={privilegio}
					key={i}
				>
					{privilegio}
				</option>
			)
		);
	}
	
	getValues(){
		const datos={
     		"accion":"insert",
     		"datos":{
     			"datosUsuario": this.state.datosUsuario,
     			"cuenta": this.state.cuenta,
     			"privilegios": this.state.privilegios
     		}
     	}

     	jquery.ajax({
     		"url": "http://localhost:80/insertar.php",
            "data": datos,
            "method": "POST",
            "crossDomain": true,
    		"dataType":'json',
    		succesful: function(resp){
    			this.setState({privilegios:resp.Privilegio})
    		}.bind(this),
    		error : function(resp){

    		}.bind(this)
     	});
	}

	getPriv(){
		return(
				this.state.privi.map((privilegio,i) =>
					<div>
					<label className = "privS">
					{privilegio} 				
					<input
						type="checkbox"
						name={privilegio}
						className="privS"
						value={privilegio}
						key={i}
						onChange={(e)=> this.onChangeHandler(e,"privilegios")}
					/>
					</label>
					</div>
				)
		);
	}
	
	getUsuario()	//Método para 
    {
     	const datos={
     		"accion":"insert",
     		"datos":{
     			"datosUsuario": this.state.datosUsuario,
     			"cuenta": this.state.cuenta,
     			"privilegios": this.state.privilegios
     		}
     	}

     	jquery.ajax({
     		"url": "http://localhost:80/insertar.php",
            "data": datos,
            "method": "POST",
            "crossDomain": true,
    		"dataType":'json',
    		succesful: function(resp){
    			this.setState({privilegios:resp.Privilegio});
    			this.setState({datosUsuario:{nombre:resp.DATOSUSUARIO.NOMBRE,
             								ap:resp.DATOSUSUARIO.AP,
             								am:resp.DATOSUSUARIO.AM,
             								cargo:resp.DATOSUSUARIO.CARGO,
             								departamento:resp.DATOSUSUARIO.DEPARTAMENTO
             								}});
    			this.setState({cuenta:{usuario:resp.CUENTA.USUARIO,
    										password:resp.CUENTA.PASSWORD
    										}});
    		}.bind(this),
    		error : function(resp){

    		}.bind(this)
     	});
     }

    insertPrivilegio(checked,privilegio){
    	var copy = Object.assign({},this.state);
    	var arreglo=copy.privilegios;
    	if(checked){
    		arreglo.push(privilegio);
    	}else{
    		var ubicacion=this.searchPrivilege(privilegio);
    		console.log(copy.privilegios);
    		console.log(ubicacion);
    		var part1=copy.privilegios.slice(0,ubicacion);
    		console.log("PARTE 1 : "+part1);
    		var part2=copy.privilegios.slice(ubicacion+1,(copy.privilegios.length));
    		console.log("PARTE2: "+part2);
    		arreglo=part1.concat(part2);
    	}
    	this.setState({privilegios:arreglo});
    	//console.log(this.state.dealersOverallTotal, 'dealersOverallTotal1');


    }
    searchPrivilege(privilegio){
    	console.log("Longitud:"+this.state.privilegios.length);
    	for (var i =0; i<this.state.privilegios.length ; i++) {
    		if(privilegio==this.state.privilegios[i]){
	   			return i;
    		}
    		else{
    			console.log("asdf");
    		}
    	}
    }
  	
	onSubmitHandler(event)	//Al enviar los datos, siempre sera insert
	{
		alert("Mensaje");
		event.preventDefault();
		let datos;
		datos={
			"datosUsuario":this.state.datosUsuario,
	     	"cuenta":this.state.cuenta,
	     	"privilegios":this.state.privilegios,
	     	"accion":"registroUsuario"
		}

     	jquery.ajax({
     		"url":"http://localhost:80/insertar.php",
            "data": datos,
            "method": "POST",
            "crossDomain": true,
    		"dataType":'json',
    		success : function(resp)
    		{
    			alert("blabla");
    		},
    		error : function(resp)
    		{
    			alert(resp);	
    		}
     	});
	}
	onClickHandler(event,objeto)
    {
  		//event.preventDefault();
      //  this.setState({datosUsuario:{privi: event.target.value }});
     }


	render(){
		let departamentos=this.getDepartamentos();
		let privi=this.getPriv();
		let cargo=this.getCargos();

		return(
			<div>
    			<form method="post" onSubmit={this.onSubmitHandler.bind(this)}>
					<div className = "conteiner">
						<div className="col-lg-12 well">
							<h2>Crear Usuario</h2>
							<h3>Datos Generales:</h3>
							<div className="row">
								<div className="col-md-4">
										<label >Nombre
											<input
												type="text"
												name="nombre"
												className="form-control"
												value={this.state.datosUsuario.nombre}
												onChange={(e) => this.onChangeHandler(e,"datosUsuario")}
												required
												pattern="^[a-zA-z\s]+$"
												title="Ingrese solo letras y espacios"
												//disabled
										/>
										</label>
								</div>
								<div className="col-md-4">
										<label >Apellido Paterno
											<input
												type="text"
												name="ap"
												className="form-control"
												required
												value={this.state.datosUsuario.ap}
												onChange={(e) => this.onChangeHandler(e,"datosUsuario")}
												pattern="^[a-zA-z\s]+$"
												title="Ingrese solo letras y espacios"
												//disabled
											/>
										</label>
								</div>
								<div className="col-md-4">
									<label >Apellido Materno
										<input
											type="text"
											name="am"
											className="form-control"
											required
											value={this.state.datosUsuario.am}
											onChange={(e) => this.onChangeHandler(e,"datosUsuario")}
											pattern="^[a-zA-z\s]+$"
											title="Ingrese solo letras y espacios"
											//disabled
										/>
									</label>
								</div>
								<div className="col-md-4">
									<label>	Cargo:
											<select
											className="form-control"
											value={this.state.datosUsuario.cargo}
											onChange={(e)=> this.onChangeHandler(e,"datosUsuario")}
											required
											name="cargo"
											>
											<option
											value=""
											>Seleccione departamento</option>		
												{cargo}
										</select>
										</label>
								</div>
								<div className="col-md-4">
									<label>	Departamento:
										<select
											className="form-control"
											value={this.state.datosUsuario.departamento}
											onChange={(e)=> this.onChangeHandler(e,"datosUsuario")}
											required
											name="departamento"
										>
											{/*<option> Seleccione Departamento </option>*/}
											<option
											value=""
											>Seleccione departamento</option>
												{departamentos}
										</select>
									</label>
								</div> {/*col-md-4*/}
							</div> {/*row*/}
						</div> {/*col-lg-12 well*/}

						<div className="col-lg-12 well">
							<h3>Nuevo Usuario:</h3>
							<div className="row">
								<div className="col-md-4">
									<label >Nombre de Usuario
										<input
										type="text"
										name="usuario"
										className="form-control"
										value={this.state.cuenta.usuario}
										onChange={(e)=> this.onChangeHandler(e,"cuenta")}
										pattern="^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$"
										title="Debe comenzar con una letra: puede contener números y guiones"
										required/>
									</label>
								</div>
								<div className="col-md-4">
									<label >Contraseña
										<input
											type="password"
											name="password" required
											className="form-control"
											value={this.state.cuenta.password}
											onChange={(e)=> this.onChangeHandler(e,"cuenta")}
											maxLength="8"
											minLength="8"
											/>
									</label>
								</div>
							</div>
						</div>

						<div className="col-lg-12 well">
							<h2>Asignar Privilegios</h2>
							<div className="row">
								<div className="col-md-4">
									<label>	Privilegio: <br/>
										{/*<select 
											className="combobox form-control"	
											value={this.state.privilegio}
											onChange={(e)=> this.onChangeHandler(e,"privilegios")}
										>
											<optgroup label="Seleccione Privilegio">
												{privi}

												<option value="AD">Administrador</option>
												<option value="CO">Coordinador</option>
												<option value="DI">Director</option>
												<option value="FN">Financiero</option>
												<option value="SC">Secretario</option>*

											</optgroup>
										</select>*/}
										{privi}		
										{this.getValues()}											
									</label>
								</div>
							</div>
						</div>
						<div className= "col-md-12">

							<center>
							<div className="col-md-4">
								<input 
									type="submit" 
									class="btn btn-primary" 
									name = "Registrar usuario"
									className="btn btn-primary btn-lg"
									value="Guardar"
								/>
							</div>
							</center>
							{/*
							<button 
								onClick="" 
								type="button" 
								name = "guardar"
								className="btn"
								onClick={(e) => this.onClickHandler(e,"")}
								value=""
							> 
							GUARDAR
							</button>					
							</center>*/}
						</div>
					</div>
				</form>
			</div>
		);
	}
}
export default DatosUsuario;
