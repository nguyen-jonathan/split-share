import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';

function* getIncome(action) {
  try {
    const res = yield axios.get(`/api/income`);
    console.log('back from GET income', res.data);
    yield put({type: 'SET_INCOME', payload: res.data});
  } catch (err) {
    alert('error getting Income');
  }
}

function* addIncome(action) {
  console.log('in addIncome', action);
  try {
    yield axios.post(`/api/income/add`, action.payload);
    yield put({type: 'SET_INCOME'});
  } catch (err) {
    alert('error adding Income');
  }
}

function* editIncome(action) {
  // PUT
  try {
    const res = yield axios.put(`/api/income/edit`, action.payload);
    yield put({type: 'SET_EDIT'});
    console.log('in edit PUT: ', res);
  } catch (err) {
    alert('error editing Income');
  }
}

function* deleteIncome(action) {
  try {
    const res = yield axios.delete(`/api/income/delete?id=${action.payload}`);
    console.log(action.payload);
  } catch (err) {
    console.log('in delete income', err);
  }
}

function* incomeSaga() {
  yield takeLatest('FETCH_INCOME', getIncome);
  yield takeLatest('ADD_INCOME', addIncome);
  yield takeLatest('EDIT_INCOME', editIncome);
  yield takeLatest('DELETE_INCOME', deleteIncome);
}

export default incomeSaga;
