import React, { Fragment } from "react";
import { Button } from "../UI/Button";
// import pizzaImg from "../../img/pizza.jpg";
import styles from "./Header.module.css";
import cartImg from "../../img/shopping-cart.png";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

export const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <Fragment>
      <header className={styles.header}>
        <h1 className={styles.title}>Pizza shop</h1>
        <Button
          variant="primary"
          title={`Cart (${numOfCartItems})`}
          onClick={props.onShowCart}
        />
      </header>
      <div className={styles.rightBallContainer}>
        <div className={styles.rightBall}></div>
      </div>
    </Fragment>
  );
};
