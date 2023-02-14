import React, { useContext } from "react";
import { Modal } from "../UI/Modal";
import styles from "./Cart.module.css";
import { Button } from "../UI/Button";
import { CartContext } from "../../store/cart-context";
import { CartItem } from "./CartItem";

export const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles.cartItems}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {!hasItems && <p>Aún no hay nada en el carrito</p>}
      {cartItems}
      <div className={styles.cartData}>
        <span>Total</span>
        <span>${totalAmount}</span>
      </div>
      <div className={styles.cartActions}>
        <Button variant="secondary" title="Close" onClick={props.onCloseCart} />
        {hasItems && <Button variant="primary" title="Order" />}
      </div>
    </Modal>
  );
};
