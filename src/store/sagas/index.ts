import { all, fork } from 'redux-saga/effects';
import { initCheckGameHash } from './gameHash.saga';
import verifySaga from './verify.saga';

export default function* rootSaga() {
  yield all([fork(verifySaga), fork(initCheckGameHash)]);
}
