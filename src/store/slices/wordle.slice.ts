import { createSlice } from '@reduxjs/toolkit';
import { MAX_ATTEMPTS } from 'src/configs';
import { Action, LetterBlock, MatchType } from 'src/types';

type GameState = {
  currentAttempt: number;
  matrix: Array<Array<LetterBlock>>;
  discoveredLetters: Record<string, MatchType>;
  gameOver: boolean;
  gameHash?: string;
};

const matchValue: Record<MatchType, number> = {
  none: 0,
  exists: 1,
  'in-place': 2,
};

const initialState: GameState = {
  currentAttempt: 0,
  matrix: Array(MAX_ATTEMPTS).fill([]),
  discoveredLetters: {},
  gameOver: false,
};

export default createSlice({
  name: 'wordle',
  initialState,
  reducers: {
    // Mutating the state in a slice is OK becase it's a draft produced by Immer
    addLetter(state, { payload: { letter } }: Action<{ letter: string }>) {
      if (state.gameOver) {
        return;
      }

      const row = state.matrix[state.currentAttempt];
      if (row.length >= 5) {
        return;
      }
      row.push({ letter });
    },
    removeLetter(state, _) {
      if (state.gameOver) {
        return;
      }

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
      if (state.currentAttempt >= MAX_ATTEMPTS) {
        state.gameOver = true;
      }
    },
    addDiscoveredLetter(
      state,
      { payload: { result } }: Action<{ result: Array<LetterBlock> }>,
    ) {
      const alreadyDiscovered = state.discoveredLetters;
      result.forEach(({ letter, matchType }) => {
        if (!alreadyDiscovered[letter]) {
          alreadyDiscovered[letter] = matchType;
          return;
        }

        if (matchValue[matchType] > matchValue[alreadyDiscovered[letter]]) {
          alreadyDiscovered[letter] = matchType;
        }
      });
    },
    checkGameHash(state, { payload: { gameHash }}: Action<{ gameHash: string }>) {
      if (gameHash !== state.gameHash) {
        return { ...initialState, gameHash }
      }
    }
  },
});
