import { takeLeading, call, select, put } from 'redux-saga/effects';
import { verifyWordRequest } from 'src/services';
import {
  actionAddDiscoveredLetters,
  actionSetNonVerifiedErr,
  actionVerifyWord_success,
} from '@store/actions';
import { VERIFY_SAGA_START } from '@store/actions/constants';
import { selectWord } from '../selectors/wordle.selectors';

function* handleVerification() {
  try {
    const word = yield select(selectWord);
    if (word.length !== 5) {
      return;
    }

    const response = yield call(verifyWordRequest, word);

    if (response.verified) {
      yield put(actionVerifyWord_success(response.result));
      yield put(actionAddDiscoveredLetters(response.result));
    } else {
      yield put(actionSetNonVerifiedErr());
    }
  } catch (error) {
    //yield put(actionSetError(error));
  }
}

export default function* verifySaga() {
  yield takeLeading(VERIFY_SAGA_START, handleVerification);
}
