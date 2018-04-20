import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'; //
import Login from './js/componentes/login/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
