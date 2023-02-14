import React from "react";
import styles from "./MealItem.module.css";
import imgSrc from "../../../img/pizza.png";
import { MealItemForm } from "./MealItemForm";
import { useContext } from "react";
import { CartContext } from "../../../store/cart-context";

export const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className={styles.mealItemContainer}>
      {/* <img src={imgSrc} alt={props.title} className={styles.pizza}></img> */}
      <div className={styles.mealDataContainer}>
        <div className={styles.mealInfoContainer}>
          <h3 className={styles.mealName}>{props.name}</h3>
          <div className={styles.mealData}>
            <div className={styles.mealDescription}>{props.description}</div>
            <div className={styles.mealPrice}>${props.price.toFixed(2)}</div>
          </div>
        </div>
        <div className={styles.mealItemFormContainer}>
          <MealItemForm onAddToCart={addToCartHandler} />
        </div>
      </div>
    </div>
  );
};
