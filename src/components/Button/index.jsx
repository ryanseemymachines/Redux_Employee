import styles from "./index.module.css";

const Button = ({ type, label, onClick }) => {
  return (
    <button className={styles.addBtn} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
