import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';

// function* transactionSaga(){

// }

function* getTransaction(action) {
  console.log('in GET transaction', action.payload);
  try {
    const res = yield axios.get(`/api/transaction`);
    yield put({type: 'GET_TRANSACTION', payload: res.data});
  } catch (err) {
    alert('error getting Transaction');
  }
}

export default getTransaction;
