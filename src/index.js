import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// import store from './redux/store';

import App from './components/App/App';
// import for saga
import {takeEvery, put} from 'redux-saga/effects';
// import for saga middleware
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import axios from 'axios';

// root saga
function* rootSaga() {
  yield takeEvery('GET_GROUP', fetchGroup);
}

// GET group for existing expenses
function* fetchGroup() {
  try {
    const res = yield axios({
      method: 'GET',
      url: '/group',
    });
    yield put({type: 'SET_GROUP', payload: res.data});
    console.log(res.data);
  } catch (err) {
    alert('error getting Group');
  }
}
// add expenses

// post new expenses

// delete expenses

// reducer to store expense
const expenseTransaction = (state = [], action) => {
  switch (action.type) {
    case 'SET_EXPENSE':
      return action.payload;
    default:
      return state;
  }
};

// reducer to store new group name
const newGroup = (state = [], action) => {
  switch (action.type) {
    case 'SET_NEW_GROUP':
      return action.payload;
    default:
      return state;
  }
};

// store for combineReducers
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({expenseTransaction, newGroup}),
  // adding sagamiddleware
  applyMiddleware(sagaMiddleware, logger)
);

// passing rootSaga to sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
