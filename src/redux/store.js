import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import jobReducer from './job/jobSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobReducer,
  },
});
