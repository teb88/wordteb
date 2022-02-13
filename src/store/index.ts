import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist-indexeddb-storage';
import rootSaga from './sagas';
import wordleSlice from './slices/wordle.slice';
import errorSlice from './slices/error.slice';
import { combineReducers } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  game: wordleSlice.reducer,
  error: errorSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: storage('DB'),
  whitelist: ['game'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

const persistor = persistStore(store);

export { persistor };
export default store;
