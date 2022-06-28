import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import jobReducer from './job/jobSlice';
import allJobsReducer from './allJobs/allJobsSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobReducer,
    allJobs: allJobsReducer,
  },
});
