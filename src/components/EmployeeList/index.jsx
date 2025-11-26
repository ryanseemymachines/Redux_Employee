import { useSelector } from "react-redux";
import EmployeeCard from "../EmployeeCard";

const EmployeeList = () => {

    const {employees,loading} = useSelector((state) => state.employee);

    if(loading)
        return <h3>Loading.....</h3>

  return (
    <div>
        {employees.map((emp) => (
            <EmployeeCard key={emp.id} emp={emp} />
        ))}
    </div>
  )
}

export default EmployeeList;