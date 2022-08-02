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
    yield put({type: 'SET_EXPENSE'});
  } catch (err) {
    alert('error adding Expense');
  }
}

// function* getEditExpense(action) {
//   try {
//     yield axios.get(`/api/transaction/expense`, action.payload);
//     console.log('back from GET transaction');
//     yield put({type: 'SET_', payload: res.data});
//   } catch (err) {
//     alert('error getting Transaction');
//   }
// }

function* editExpense(action) {
  // PUT
  try {
    const res = yield axios.put(`/api/transaction/edit`, action.payload);
    yield put({type: 'SET_EDIT'});
    console.log('in edit PUT: ', res);
  } catch (err) {
    alert('error editing Expense');
  }
}

function* deleteExpense(action) {
  try {
    const res = yield axios.delete(
      `/api/transaction/delete?id=${action.payload}`
    );
    console.log(action.payload);
  } catch (err) {
    console.log('in delete expense', err);
  }
}

function* transactionSaga() {
  yield takeLatest('FETCH_TRANSACTION', getTransaction);
  // yield takeLatest('FETCH_EDIT_EXPENSE', getEditExpense);
  yield takeLatest('ADD_EXPENSE', addExpense);
  yield takeLatest('EDIT_EXPENSE', editExpense);
  yield takeLatest('DELETE_EXPENSE', deleteExpense);
}

export default transactionSaga;
