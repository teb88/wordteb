import {
  ADD_LETTER,
  REMOVE_LETTER,
  VERIFY_SAGA_START,
  VERIFY_SAGA_SUCCESS,
} from './constants';
import { createAction } from './util';

export const actionVerifyWord_start = createAction(VERIFY_SAGA_START);
export const actionVerifyWord_success = createAction(
  VERIFY_SAGA_SUCCESS,
  'result',
);

export const actionAddLetter = createAction(ADD_LETTER, 'letter');
export const actionRemoveLetter = createAction(REMOVE_LETTER);
