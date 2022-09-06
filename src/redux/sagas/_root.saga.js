import {all, takeEvery} from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import fetchAllGroup from './fetchAllGroup.saga';
import addGroup from './addGroup.saga';
import transaction from './transaction.saga';
import transactionSaga from './transaction.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    // transaction(),
    transactionSaga(),
    // takeEvery('ADD_GROUP', addGroup),
    // takeEvery('FETCH_GROUPS', fetchAllGroup),
    // takeEvery('FETCH_TRANSACTION', transaction),
  ]);
}
