import React,{Component, PropTypes} from 'react';
import Info from './Datos.js';
import Respuesta from './respuesta.js';

class Solicitud extends Component{
    constructor(){
        super();
        this.state={
            nombre:"",
            control:"",
            nivel:"",
            periodo:"",
            foto:"",
            estado:""
    }
}


componentDidMount(){
    //Obtiene el valor enviado por el componente que lo llama
    let v= this.props.location.state;
    //establece los valores del estado con el parametro recibido *******CAMBIAR PARA ESTABLECER QUERY*********
    this.setState((state)=>({nombre:v.nombre}));
    this.setState((state)=>({nivel:v.control}));
    this.setState((state)=>({periodo:v.estado}))
    this.setState((state)=>({estado:v.estado}))
    console.log(v);
}

 getNombre() {
    return this.state.nombre;
}

getNivel(){
    return this.state.nivel;
}

getPeriodo(){
    return this.state.periodo;
}

getImagen(){
    return this.state.foto;
}


render(){

    const nombre=this.getNombre();
    const nivel=this.getNivel();
    const periodo=this.getPeriodo();
    const foto=this.getImagen();
    let tipo='';

    if(this.state.estado==='pendiente'){
        tipo=<Respuesta nombre={nombre}/>;
    }
    else{
        tipo= <div>
            Aceptada/rechazada
        </div>;
    
}
    return(
        <div className="container">
            <div className="container m-3">
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <img className="rounded" src={foto} alt={foto} title={foto}/> 
                            </div>
                        </div>
                        <div className="row p-2 border-bottom">
                            <div className="col-1">
                                <span>Nombre</span>
                            </div>
                            <div className="col">
                                <div className="container">
                                    <Info dato={nombre}/>
                                </div>
                            </div>
                        </div>
                        <div className="row p-2 border-bottom">
                            <div className="col-1">
                                <span>Nivel</span>
                            </div>
                            <div className="col">
                                <div className="container">
                                    <Info dato={nivel}/>
                                </div>
                            </div>
                        </div>
                        <div className="row p-2 border-bottom">
                            <div className="col-1">
                                <span>Periodo</span>
                            </div>
                            <div className="col">
                                <div className="container">
                                    <Info dato={periodo}/>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="container m-3">
                    {tipo}
                </div>   
            </div>   
        
    );
}
}

export default Solicitud;

