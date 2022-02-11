import wordleSlice from '../slices/wordle.slice';

export const SET_ERROR = 'SET_ERROR';
export const UNSET_ERROR = 'UNSET_ERROR';

export const VERIFY_SAGA_START = '[Verify Saga] Start';
export const VERIFY_SAGA_SUCCESS = wordleSlice.actions.verifyWord.type;
export const ADD_LETTER = wordleSlice.actions.addLetter.type;
export const REMOVE_LETTER = wordleSlice.actions.removeLetter.type;
export const ADD_DISCOVERED_LETTERS =
  wordleSlice.actions.addDiscoveredLetter.type;
