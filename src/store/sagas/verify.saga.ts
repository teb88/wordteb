import { takeLeading, call, select, put } from 'redux-saga/effects';
import { verifyWordRequest } from 'src/services';
import { actionVerifyWord_success } from '@store/actions';
import { VERIFY_SAGA_START } from '@store/actions/constants';
import { selectWord } from '../selectors/wordle.selectors';

function* handleVerification() {
  try {
    const word = yield select(selectWord);
    const response = yield call(verifyWordRequest, word);
    console.log(response);
    if (response.verified) {
      yield put(actionVerifyWord_success(response.result));
    }
  } catch (error) {}
}

export default function* verifySaga() {
  yield takeLeading(VERIFY_SAGA_START, handleVerification);
}
