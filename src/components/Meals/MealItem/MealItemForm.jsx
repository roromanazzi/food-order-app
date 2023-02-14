import React, { Fragment } from "react";
import { Button } from "../../UI/Button";
import { Input } from "../../UI/Input";
import styles from "./MealItemForm.module.css";
import buttonStyles from "../../UI/Button.module.css";
import { useState, useRef } from "react";
import { BsCartPlus } from "react-icons/bs";

export const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <Fragment>
      <form className={styles.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: 1,
            step: 1,
            defaultValue: 1,
          }}
        />
        <Button
          icon={<BsCartPlus />}
          className={buttonStyles.primaryButton}
          width={"40px"}
          borderRadius="0 40px 40px 0"
        />
      </form>
      {!amountIsValid && (
        <p className={styles.invalidMessage}>
          Por favor, solo se puede agregar de a 10 (diez) pizzas.
        </p>
      )}
    </Fragment>
  );
};
