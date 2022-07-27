import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './redux/store';

import App from './components/App/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// add expenses

// post new expenses

// delete expenses

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
