import React, {Component, PropTypes} from 'react';
import './Beca.css'
class Beca extends Component{
    constructor(props){
        super(props);
    }

    render(){
        var estado='estado ';
        var priv;
        var director=true;
        var st=this.props.status;

        if(director && st=='pendiente'){
            priv =<a href="#"><span className={estado+=st}>{st}</span></a>;
        }
        else{
            priv=<span className={estado+=st}>{st}</span>;
        }
        return(
            <div className="lista">
                <span className="numero ">{this.props.numero}</span>
                <span className="nombre">{this.props.nombre}</span>
               {priv}
            </div>
        );
    }
}
export default Beca;