import {   configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import phoneBookReducer from './phoneBookSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items']
}

const persistedReducer = persistReducer(persistConfig, phoneBookReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

