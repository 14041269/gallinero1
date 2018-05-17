import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'; //cambiar
import Principal from './js/componentes/inscripciones/principal';
import registerServiceWorker from './registerServiceWorker';
import Pagos from './js/componentes/pagos/principalPagos'
ReactDOM.render(<Principal />, document.getElementById('root'));
//ReactDOM.render(<Pagos />, document.getElementById('root'));

registerServiceWorker();
