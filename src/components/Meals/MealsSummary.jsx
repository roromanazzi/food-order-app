import React, { Fragment } from "react";
import styles from "./MealsSummary.module.css";

export const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <span className={styles.title}>
        <h2 className={styles.habemus}>Habemus </h2>
        <h2 className={styles.pizza}> pizza!</h2>
      </span>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dignissimos
        tenetur porro. Veritatis, laudantium. Tenetur quaerat consectetur fugiat
        sit voluptatem repudiandae vero tempora sed, possimus, eos illo a
        explicabo dolorem?
      </p>
    </section>
  );
};
