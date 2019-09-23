import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Store from './store';
import { Provider } from 'react-redux';

const storeInstance = Store();

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);



