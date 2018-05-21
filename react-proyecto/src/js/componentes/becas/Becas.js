import React, { Component, PropTypes } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-dom';
import Beca from './Beca';
import './Becas.css';
class Becas extends Component{
    constructor(){
        super();
        this.state={
            becas:[
                {id:1,nombre:'Jorge Emmanuel Márquez Rentería',status:'aceptada'},
                {id:2,nombre:'Jorge Emmanuel Márquez Rentería',status:'rechazada'},
                {id:3,nombre:'José de Jesús Márquez Rentería',status:'pendiente'},
                {id:4,nombre:'asdaadsasdsnd jaskdjaskj asdasdasdadkjaskjhakjshaskh',status:'aceptada'}
            ]
        }
    }


    _getBecas(){        		
        return this.state.becas.map((beca) => {
            return <Beca key={beca.id} numero={beca.id} nombre={beca.nombre} status={beca.status} />
    });
}

    render(){
        const b=this._getBecas();
        return(
            <div className="container">
                <div className="becas">
                    <span className="numero">#</span>
                    <span className="nombre">Nombre</span>
                    <span className="estado">Estado</span>
                    {b}
                </div>
            </div>
        );
    }
}

export default Becas;