import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';

function* getTransaction(action) {
  try {
    const res = yield axios.get(`/api/transaction`);
    console.log('back from GET transaction', res.data);
    yield put({type: 'SET_TRANSACTION', payload: res.data});
  } catch (err) {
    alert('error getting Transaction');
  }
}

function* addExpense(action) {
  console.log('in addExpense', action);
  try {
    yield axios.post(`/api/transaction/expense`, action.payload);
    console.log('back from POST expense');
    yield put({type: 'GET_TRANSACTION'});
  } catch (err) {
    alert('error adding Expense');
  }
}

function* transactionSaga() {
  yield takeLatest('FETCH_TRANSACTION', getTransaction);
  yield takeLatest('ADD_EXPENSE', addExpense);
}

export default transactionSaga;
