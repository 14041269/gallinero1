import React,{Component, PropTypes} from 'react';
import './Solicitud.css';

class Info extends Component{
        constructor(props){
            super(props);
        }
    
        render(){    
            return(
                    <span className="dato">{this.props.dato}</span>
            );
        }
}


export default Info;
