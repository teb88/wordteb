import {
  ADD_DISCOVERED_LETTERS,
  ADD_LETTER,
  CHECK_GAME_HASH_SAGA,
  CHECK_GAME_HASH_SAGA_SUCCESS,
  REMOVE_LETTER,
  SET_ERROR,
  SET_NONVERIFIED_ERR,
  UNSET_ERROR,
  UNSET_NONVERIFIED_ERR,
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

export const actionSetNonVerifiedErr = createAction(SET_NONVERIFIED_ERR);
export const actionUnsetNonVerifiedErr = createAction(UNSET_NONVERIFIED_ERR);

export const actionCheckGameHash_start = createAction(CHECK_GAME_HASH_SAGA);
export const actionCheckGameHash_success = createAction(CHECK_GAME_HASH_SAGA_SUCCESS, 'gameHash');