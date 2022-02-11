import { createSlice } from '@reduxjs/toolkit';
import { Action } from 'src/types';
import type { ErrorState } from 'src/types';

const initialState: ErrorState = null;

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, { payload }: Action<ErrorState>) {
      state.message = payload.message;
    },
    unsetError() {
      return null;
    },
  },
});

export default errorSlice;
