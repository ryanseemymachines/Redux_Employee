import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API = "https://6580190d6ae0629a3f54561f.mockapi.io/api/v1/employee";

export const fetchEmployee = createAsyncThunk(
  "employee/fetchEmployee",
  async () => {
    const response = await fetch(API);
    return response.json();
  }
);

export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (data) => {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload);
      });
  },
});

export default employeeSlice.reducer;
