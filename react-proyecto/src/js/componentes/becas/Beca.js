import React, {Component, PropTypes} from 'react';
import './Beca.css'
import {Link} from 'react-router-dom';
class Beca extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        var estado='estado ';
        var priv;
        var director=true;
        var st=this.props.status;

        //Condición para determinar si el usuario tiene privilegio necesario para responder solicitud
        if(director && st=='pendiente'){
             priv =  <Link className={`btn ${estado}  btn-warning `} /*to={ `/solicitud/${this.props.numero}`}*/
                        to={{pathname:`/solicitud/${this.props.numero}`,
                             state:{
                                 nombre:this.props.nombre,
                                 control:this.props.numero,
                                 estado:st}}}>
                        {st}
                    </Link>;
        }
        else{
            priv=<span className={estado+=st}>{st}</span>;
        }
        return(
            <div className="lista">
                <span className="numero">{this.props.numero}</span>
                <span className="nombre">{this.props.nombre}</span>
               {priv}
            </div>
        );
    }
}
export default Beca;