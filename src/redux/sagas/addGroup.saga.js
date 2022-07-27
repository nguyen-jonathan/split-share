import axios from 'axios';
// import put from 'redux-saga/effects';

// post new group
function* addGroup(action) {
  try {
    yield axios.post('/api/group', action.payload);
  } catch (err) {
    console.log('error on posting new group');
  }
}
export default addGroup;
