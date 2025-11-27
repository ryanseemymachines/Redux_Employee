import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEmployee } from "../../redux/employeeActions/fetchEmployee";
import Button from "../../components/Button";
import NewEmployee from "../../components/NewEmployee";
import EmployeeList from "../../components/EmployeeList";
import styles from "./index.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployee());
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.homePage}>
      <h1>Employee dashboard</h1>
      <div className={styles.btnWrapper}>
        <Button type="button" label="+ Add Employee" onClick={openModal} />
        <Button
          type="button"
          label="View Employee List"
          onClick={toggleListVisibility}
        />
      </div>

      {isListVisible && <EmployeeList />}
      {isModalOpen && <NewEmployee onClose={closeModal} />}
    </div>
  );
};

export default Home;
