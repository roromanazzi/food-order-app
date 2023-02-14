import React from "react";
import styles from "./Input.module.css";

export const Input = React.forwardRef((props, ref) => {
  const { className } = props;
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={props.input.id} className={styles.label}>
        {props.label}
      </label>
      <input
        ref={ref}
        {...props.input}
        className={`${styles.input} ${className}`}
      />
    </div>
  );
});
