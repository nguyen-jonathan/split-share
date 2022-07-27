import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';

function* fetchAllGroupSaga() {
  yield takeLatest('GET_GROUP_SAGA', fetchAllGroup);
}

function* fetchAllGroup() {
  try {
    const res = yield axios.get(`/api/group`);
    yield put({type: 'SET_GROUP', payload: res.data});
    console.log(res.data);
  } catch (err) {
    alert('error getting Group');
  }
}

export default fetchAllGroupSaga;
