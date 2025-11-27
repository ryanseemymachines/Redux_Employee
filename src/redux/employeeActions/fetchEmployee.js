import { fetchPending, fetchSuccess, fetchError } from "../employeeSplice";

const API = "https://6580190d6ae0629a3f54561f.mockapi.io/api/v1/employee";

export function fetchEmployee() {
  return async function fetchEmployeeThunk(dispatch) {
    dispatch(fetchPending());

    try {
      const response = await fetch(API);
      const data = await response.json();
      dispatch(fetchSuccess(data));
    } catch (err) {
      dispatch(fetchError(err.message));
    }
  };
}
