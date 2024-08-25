import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './slices/adminSlice';
import employeeReducer from './slices/employeeSlice';

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    employee: employeeReducer,
  },
});
