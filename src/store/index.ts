import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';
import wordleSlice from './slices/wordle.slice';
import errorSlice from './slices/error.slice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { 
    game: wordleSlice.reducer, 
    error: errorSlice.reducer 
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
