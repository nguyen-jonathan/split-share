import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';

function* fetchGroupSaga() {
  yield takeLatest('GET_GROUP_SAGA', fetchGroup);
}

function* fetchGroup() {
  try {
    const res = yield axios.get(`/api/group/fetchGroup`);
    yield put({type: 'GET_GROUP', payload: res.data});
    console.log(res.data);
  } catch (err) {
    alert('error getting Group');
  }
}

export default fetchGroupSaga;
