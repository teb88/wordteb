import { actionCheckGameHash_success } from "@store/actions";
import { call, put, take } from "redux-saga/effects";
import { verifyGameHashRequest } from "src/services";

function* handleCheckGameHash() {
  try {
    const { gameHash } = yield call(verifyGameHashRequest);  
    yield put(actionCheckGameHash_success(gameHash))    
  } catch (error) {
    TODO: "Handle errors"
  }
}

export function* initCheckGameHash() {
  yield take('persist/REHYDRATE'); // wait for redux persist rehydration
  yield call(handleCheckGameHash);
}