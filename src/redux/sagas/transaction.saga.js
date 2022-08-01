import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';

function* getTransaction(action) {
  console.log('in GET transaction', action.payload);
  try {
    const res = yield axios.get(`/api/transaction`);
    console.log('back from GET transaction', res.data);
    yield put({type: 'SET_TRANSACTION', payload: res.data});
  } catch (err) {
    alert('error getting Transaction');
  }
}

function* transactionSaga() {
  yield takeLatest('FETCH_TRANSACTION', getTransaction);
}

export default transactionSaga;
