import { createSlice } from '@reduxjs/toolkit';
import { MAX_ATTEMPTS } from 'src/configs';
import { Action, LetterBlock } from 'src/types';

const initialState = {
  currentAttempt: 0,
  matrix: Array(MAX_ATTEMPTS).fill([]),
  gameOver: false,
};

export default createSlice({
  name: 'wordle',
  initialState,
  reducers: {
    // Mutating the state in a slice is OK becase it's a draft produced by Immer
    addLetter(state, { payload: { letter } }: Action<{ letter: string }>) {
      const row = state.matrix[state.currentAttempt];
      if (row.length >= 5) {
        return;
      }
      row.push({ letter });
    },
    removeLetter(state, _) {
      state.matrix[state.currentAttempt].pop();
    },
    verifyWord(
      state,
      { payload: { result } }: Action<{ result: Array<LetterBlock> }>,
    ) {
      state.matrix[state.currentAttempt] = result;
      if (result.every(({ matchType }) => matchType === 'in-place')) {
        state.gameOver = true;
        return;
      }

      state.currentAttempt++;
    },
  },
});
