import React,{Proptypes, Component} from 'react';

class Respuesta extends Component{
    constructor(props){
        super(props);

        this.state={
            respuesta:'aceptar'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Permite identificar los cambios de estado para que solo se seleccione un radio
    handleChange(event) {
        this.setState({
          respuesta: event.target.value
        });
      }
    
    // Metodo para 
    handleSubmit(event) {
    event.preventDefault();   
    var text=document.getElementById('texto').value;
    var conf=window.confirm(`Desea ${this.state.respuesta} la beca a ${this.props.nombre}?`);
    console.log(conf, text);
    this.confirmar(conf);
    }
    
    //   Permite realizar una verificación de la respuesta antes de enviar
    confirmar(b){
        if(b){
            console.log("Datos agregados");
            
        }
    }  


    render(){
        return(
            <form onSubmit={this.handleSubmit} id="respuesta">
            <div class="form-check form-check-inline mx-3 mt-1">
                <input class="form-check-input" type="radio"  id="accept" value="aceptar"
                checked={this.state.respuesta === 'aceptar'} onChange={this.handleChange}></input>
                <label class="form-check-label" for="accept">Aceptar</label>
            </div>
            <div class="form-check form-check-inline mx-3">
                <input class="form-check-input" type="radio"  id="decline" value="rechazar"
                checked={this.state.respuesta === 'rechazar'} onChange={this.handleChange}></input>
                <label class="form-check-label" for="decline">Rechazar</label>
            </div>
            <div class="form-group m-3">
                <textarea class="form-control" id="texto" rows="3" placeholder="Escriba sus motivos aquí"
                    required></textarea>
            </div>
                {/* <label>
                    <input type="radio" value="aceptar" checked={this.state.respuesta === 'aceptar'} 
                      onChange={this.handleChange}/>Aceptar
                </label>    
                <label>
                    <input type="radio" value="rechazar" checked={this.state.respuesta === 'rechazar'} 
                      onChange={this.handleChange}/>Rechazar
                </label><br></br>
                <center><textarea cols="100" rows="10" required={true} id="texto"/></center>    <br></br>
                <button type="submit" onClick="">Enviar respuesta</button> */}  
            <div className="">
                <button className="btn btn-primary" type="submit" onClick="handleSubmit()">Enviar respuesta</button>
            </div>
            </form>
        )
    }
}
export default Respuesta;