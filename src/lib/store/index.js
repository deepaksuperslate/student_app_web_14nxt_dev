import { configureStore } from '@reduxjs/toolkit';
import userReducer from './usersSlice';
import noteReducer from './noteSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    note: noteReducer
  },
});
