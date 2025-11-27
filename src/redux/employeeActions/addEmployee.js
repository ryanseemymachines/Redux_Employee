import { addSuccess} from "../employeeSplice";

export function addEmployee(newData) {
  return async function addEmployeeThunk(dispatch) {
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newData),
      });

      const result = await res.json();

      dispatch(addSuccess(result));
    } catch (err) {
      console.log("Add Failed:", err);
    }
  };
}
