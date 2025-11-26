import styles from "./index.module.css";
import InputFields from "../InputFields";
import Button from "../Button";
import { IoMdClose } from "react-icons/io";

const NewEmployee = ({ onClose }) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <form
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h2>Add New Employee</h2>
          <IoMdClose className={styles.closeModal} onClick={onClose} />
        </div>
        <InputFields type="text" placeholder="Enter Name..." />
        <InputFields type="text" placeholder="Enter designation..." />
        <InputFields type="date" />
        <Button type="button" label="Add Employee" />
      </form>
    </div>
  );
};

export default NewEmployee;
