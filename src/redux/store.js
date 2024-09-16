import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './slices/userSlice';
import homeReducer from './slices/homeSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['profile'],
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    home: homeReducer,
  },
});

export const persistor = persistStore(store);

export default store;