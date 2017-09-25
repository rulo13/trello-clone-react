import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <section className="section">
    <div className="container">
    <Routes />
    </div>
  </section>, document.getElementById('root'));
registerServiceWorker();
