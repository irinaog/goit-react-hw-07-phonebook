import {   configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
// import { filterReducer, itemsReducer } from "./phoneBookReducer";
import { contactsApi } from "./contactsSlice";

// import phoneBookReducer from './phoneBookSlice';


export const store = configureStore({
  reducer: {
    // contacts: phoneBookReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch)
// export const store = configureStore({
//   reducer: {
//       items: itemsReducer,
//       filter:filterReducer,
//   }
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['items']
// }

// const persistedReducer = persistReducer(persistConfig, phoneBookReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);


