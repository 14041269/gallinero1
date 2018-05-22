import React, { Component } from 'react';
import Navigation from '../navigation';
import '../../../css/pagosTabla.css';
import Modal from 'react-awesome-modal';
import BuscarAlumno from '../inscripciones/buscarAlumno';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;

class Pagos extends Component {

	constructor(props)
	{

		super(props);
		this.state={
			visible : false,
				datosAlumno:{
						nombre:"Alan",
						ap:"Yañez",
						am:"Sanchez"
				},
				datosInscripciones:{
					noControl:"14041331",
					periodo:"Enero-Julio 2018"
				},
				pagos:{
						pagoInscripcion:{
							concepto:"Inscripcion",
							total:2500,
							pagado:true,
							metodoPago:"Efectivo",
							fechaPago:"2018-01-20"
						},
						pagosMensualidad:[{
							concepto:"Mensualidad 1",
							colegiatura:500,
							mantenimiento:500,
							pagosParciales:[{
								numero:1,
								cantidad:1000,
								metodoPago:"Efectivo",
								fechaPago:"2018-02-15",
								pagado:true
							}],
							fechaLimite:"2018-02-20",
							pagado:true,
							intereses:0.1,
							descuento:10,
							documentos:[{
								documento:"Constancia",
								cantidad:1,
								pago:true,
								fecha:"2018-02-10"
							}]
						}]
			}
		}
	}

	calcularTotal(colegiatura,mantenimiento,interes){
		this.TotalS = (colegiatura+mantenimiento);
		return(this.TotalS);
	}
	calcularTotalIntereses(colegiatura,mantenimiento,interes){
		this.TotalInteres = (colegiatura+mantenimiento)*interes;
		return(this.TotalInteres);
	}
	calcularTotalInteresesC(total,interes){
		this.TotalInteres = total*interes;
		return(this.TotalInteres);
	}
	calcularSumaTotal(Total,TotalInteres,desc){
		this.SumTotal = Total+TotalInteres-desc;
		return(this.SumTotal);
	}
	aDeber(SumTotal,SumaParciales){
		var Debe=0;
		Debe=SumTotal-SumaParciales;
		return(Debe);
	}

	renderRowsParciales(){
		var sparcial=0;
		return(
			this.state.pagos.pagosMensualidad.map((mensualidad,i)=>{
				return	mensualidad.pagosParciales.map((parcial,j)=>{
						sparcial=sparcial+parcial.cantidad;
						this.SumaParciales=sparcial;
			 return	<tr>
								<th>{parcial.cantidad}</th>
								<th>{parcial.fechaPago}</th>
								<th>{parcial.metodoPago}</th>
							</tr>
					})
			})
		);
	}

 renderRowsMensualidad(){

	 	this.renderRowsParciales()
		return(
			this.state.pagos.pagosMensualidad.map((mensualidad,i)=>{
				var descuento=mensualidad.descuento;
return	<tr onClick={() => this.openModal()}>
					<th>{mensualidad.concepto}</th>
					<th>{this.calcularTotal(mensualidad.colegiatura,mensualidad.mantenimiento)}</th>
					<th>{mensualidad.fechaLimite}	</th>
					<th>{this.calcularTotalIntereses(mensualidad.colegiatura,mensualidad.mantenimiento,mensualidad.intereses)}	</th>
					<th>{mensualidad.descuento}	</th>
					<th>{this.calcularSumaTotal(this.TotalS,this.TotalInteres, descuento)}	</th>
					<th>{this.SumaParciales}	</th>
					<th>{this.aDeber(this.SumTotal,this.SumaParciales)}	</th>
				</tr>
			})
		);
	}

	renderRowsCuenta(){
 		return(
			<tr>
 					<th>{this.state.pagos.pagoInscripcion.concepto}</th>
 					<th>{this.state.pagos.pagoInscripcion.total}</th>
 					<th> -	</th>
 					<th> 0	</th>
 					<th> 0	</th>
 					<th>{this.state.pagos.pagoInscripcion.total}	</th>
 					<th>{this.state.pagos.pagoInscripcion.total}	</th>
 					<th> 0	</th>
 				</tr>

 		);
 	}

	openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
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
			<div className="container container2" >
				<section>
					<BuscarAlumno nombre={"Buscar"} searchStudent={this._searchStudent.bind(this)}/>
					<h2>Alumno: {this.state.datosAlumno.ap} {this.state.datosAlumno.am} {this.state.datosAlumno.nombre}</h2>
					<h2>No. de control:  {this.state.datosInscripciones.noControl}</h2>
				</section>
			</div>

			<div className="container">
				<section>
				  <h1>Estado de cuenta.</h1>
				  <div className="tbl-header">
				    <table cellPadding="0" cellSpacing="0" border="0">
				      <thead>
								<tr>
 								 <th>Concepto.</th>
 								 <th>Mensualidad.</th>
 								 <th>Fecha limite de pago.</th>
 								 <th>Intereses.</th>
 								 <th>Descuento.</th>
 								 <th>Total a pagar.</th>
 								 <th>Ha Pagado.</th>
 								 <th>Debe.</th>
 							 </tr>
				      </thead>
				    </table>
				  </div>
					<div className="tbl-content">
				    <table cellPadding="0" cellSpacing="0" border="0">
							<tbody>
									{this.renderRowsCuenta()}
									{this.renderRowsMensualidad()}
				      </tbody>
				    </table>
				  </div>
				</section>
			</div>

			<Modal className="row"
					visible={this.state.visible}
					width="700"
					height="600"
					effect="fadeInUp"
					onClickAway={() => this.closeModal()}>
					<div className="col-md-12">
								<section>
									<h1>Pagos parciales.</h1>
									<div className="tbl-header">
										<table cellPadding="0" cellSpacing="0" border="0">
											<thead>
												<tr>
													<th>Cantidad.</th>
													<th>Fecha de pago.</th>
													<th>Metodo de pago.</th>
												</tr>
											</thead>
										</table>
									</div>
									<div className="tbl-content">
										<table cellPadding="0" cellSpacing="0" border="0">
											<tbody>
													{this.renderRowsParciales()}
											</tbody>
										</table>
									</div>
									<a href="javascript:void(0);" onClick={() => this.closeModal()}>Cerrar</a>
								</section>
					</div>
			</Modal>

		</div>
    );
	}
}

export default Pagos;
