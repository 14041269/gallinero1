import React, { Component } from 'react';
import '../../../css/Login.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
class Login extends Component {
   constructor()
  {
    super();
    this.nombre=" Rafael Carbajal Galindo"
  }
/*_addMessage(mensaje){
          const datos = {
            "accion": "insert",             
            "mensaje": mensaje+""
          }

          jquery.ajax({
            "url": "localhost/insertar.php",
            "data": datos,
            "method": "post",
            success: function(resp){
              alert(resp);
              //this.setState({mensajes: this.state.mensajes.concat([resp])});
          }});
       }*/


  render() {
    return (
      <div className="contenedor-login">

        
        <span className="glyphicon glyphicon-lock move"></span>
        <h1>Iniciar sesión</h1>

        
        <form action="" method="POST">
        
          <input type="text"  name="usuario" placeholder="Usuario" required />
      
          <input type="password" name="contraseña" placeholder="Contraseña" required/>
          <input type="submit" value="Ingresar" className="btn btn-primary"/>

        </form>
        </div>
    );
  }
}

export default Login;
