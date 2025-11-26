import styles from "./index.module.css";

const InputField = (props) => {
  const { type, name, placeholder, value, onChange } = props;
  return (
    <input
      className={styles.textInput}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;