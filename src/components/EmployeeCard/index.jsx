import styles from "./index.module.css";

const EmployeeCard = ({ emp }) => {
  const dob = new Date(emp.dob);
  return (
    <div className={styles.employeeCard}>
      <h3>{emp.name}</h3>
      <p>{emp.designation}</p>
      <p>{dob.toLocaleDateString("en-IN")}</p>
    </div>
  );
};

export default EmployeeCard;
