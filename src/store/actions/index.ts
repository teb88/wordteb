import {
  ADD_DISCOVERED_LETTERS,
  ADD_LETTER,
  REMOVE_LETTER,
  SET_ERROR,
  UNSET_ERROR,
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
export const actionAddDiscoveredLetters = createAction(
  ADD_DISCOVERED_LETTERS,
  'result',
);
export const actionSetError = createAction(SET_ERROR, 'error');
export const actionUnsetError = createAction(UNSET_ERROR);
