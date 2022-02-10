import { createSelector } from 'reselect';

export const selectMatrix = createSelector(
  (state) => state.matrix,
  (matrix) => matrix,
);

export const selectCurrentAttempt = createSelector(
  (state) => state.currentAttempt,
  (attempt) => attempt,
);

export const selectWord = createSelector(
  selectMatrix,
  selectCurrentAttempt,
  (matrix, attempt) => matrix[attempt].map(({ letter }) => letter).join(''),
);
