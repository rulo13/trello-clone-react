import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import 'rxjs';

import {store, history} from './store';
import Routes from './routes';
import './index.css';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
      <div className="container">
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </div>
    </Provider>
  // <section className="section"></section>
  , document.getElementById('root'));
registerServiceWorker();
