import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice'
import initReducer from './slice/initReducer'
export const store = configureStore({
  reducer: {
    userSlice,
    initReducer,
  },
})
