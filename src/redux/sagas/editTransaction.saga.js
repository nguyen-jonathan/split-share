import axios from 'axios';
// import put from 'redux-saga/effects';

// post new group
function* addGroup(action) {
  try {
    const res = yield axios.post('/api/group', action.payload);
    console.log(res);
  } catch (err) {
    console.log('error on posting new group');
  }
}
export default addGroup;
