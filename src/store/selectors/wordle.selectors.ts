import { createSelector } from 'reselect';
import { RootState } from '..';

export const selectMainState = createSelector(
  (state: RootState) => state.game,
  (wordle) => wordle,
);

export const selectMatrix = createSelector(
  selectMainState,
  (wordle) => wordle.matrix,
);

export const selectCurrentAttempt = createSelector(
  selectMainState,
  (wordle) => wordle.currentAttempt,
);

export const selectWord = createSelector(
  selectMatrix,
  selectCurrentAttempt,
  (matrix, attempt) => matrix[attempt].map(({ letter }) => letter).join(''),
);

export const selectDiscoveredLetters = createSelector(
  selectMainState,
  (state) => state.discoveredLetters,
);
