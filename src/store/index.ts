import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';
import wordleSlice from './slices/wordle.slice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: wordleSlice.reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
