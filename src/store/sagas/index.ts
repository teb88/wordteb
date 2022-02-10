import { all, fork } from 'redux-saga/effects';
import verifySaga from './verify.saga';

export default function* rootSaga() {
  yield all([fork(verifySaga)]);
}
