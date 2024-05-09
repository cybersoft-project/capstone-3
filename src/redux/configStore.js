import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';
import loadingSlice from './slice/loadingSlice';
export const store = configureStore({
  reducer: {
    userSlice,
    loadingSlice,
  },
});
