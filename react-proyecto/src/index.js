import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'; //cambiar
import Principal from './js/componentes/inscripciones/principal';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Principal />, document.getElementById('root'));

registerServiceWorker();
