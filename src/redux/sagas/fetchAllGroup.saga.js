import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';

// function* fetchAllGroupSaga() {
//   yield takeLatest('GET_GROUP_SAGA', fetchAllGroup);
// }

function* fetchAllGroup() {
  try {
    const group = yield axios.get(`/api/group`);
    console.log('get all: ', group.data);
    yield put({type: 'SET_GROUP', payload: group.data});
  } catch (err) {
    alert('error getting Group');
  }
}

export default fetchAllGroup;
