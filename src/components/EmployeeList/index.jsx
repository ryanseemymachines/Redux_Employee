import { useSelector } from "react-redux";
import EmployeeCard from "../EmployeeCard";
import styles from "./index.module.css";

const EmployeeList = () => {
  const { employees, loading } = useSelector((state) => state.employee);

  if (loading) return <h3>Loading.....</h3>;

  return (
    <div className={styles.employeeList}>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} emp={emp} />
      ))}
    </div>
  );
};

export default EmployeeList;
