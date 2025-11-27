import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from '../redux/employeeSplice';

const store = configureStore({
  reducer: {
    employee: employeeSlice,
  },
});

export default store;