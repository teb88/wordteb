import { createSelector } from "reselect";
import type { RootState } from "..";

export const selectErrorState = createSelector(
  (state: RootState) => state.error,
  err => err
);

export const selectNonVerifiedErr = createSelector(
  selectErrorState,
  err => err?.nonVerified || null
)