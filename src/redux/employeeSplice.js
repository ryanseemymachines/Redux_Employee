import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchPending: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.employees = action.payload;
    },
    fetchError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addSuccess: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});

export const { fetchPending, fetchSuccess, fetchError, addSuccess } =
  employeeSlice.actions;

export default employeeSlice.reducer;
