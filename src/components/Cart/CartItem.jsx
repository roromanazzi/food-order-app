import React from "react";
import { Button } from "../UI/Button";
import styles from "./CartItem.module.css";

export const CartItem = (props) => {
  return (
    <li>
      <div className={styles.itemContainer}>
        <div className={styles.itemDataContainer}>
          <span className={styles.itemAmount}>x{props.amount}</span>
          <h2 className={styles.itemName}>{props.name}</h2>
          <span className={styles.itemPrice}>$ {props.price}</span>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            title="-"
            variant="secondary"
            width={"36px"}
            borderRadius={"40px 0 0 40px"}
            onClick={props.onRemove}
          />
          <Button
            title="+"
            variant="primary"
            width={"36px"}
            borderRadius={"0 40px 40px 0"}
            onClick={props.onAdd}
          />
        </div>
      </div>
    </li>
  );
};
