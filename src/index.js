import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div className="container">
      <Routes />
    </div>
  // <section className="section"></section>
  , document.getElementById('root'));
registerServiceWorker();
