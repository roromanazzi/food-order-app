import React, { Fragment } from "react";
import { MealItem } from "./MealItem/MealItem";
import styles from "./MealItem/MealItem.module.css";

const MEALS = [
  {
    id: "p1",
    name: "Pizza de pepperoni",
    description:
      "Pizza con el más rico pepperoni traido directamente de Estados Unidos!",
    price: 1600,
    imgScr: "../../img/fun.png",
  },
  {
    id: "p2",
    name: "Pizza de palmitos y salsa golf",
    description:
      "Nos aseguramos de ir personalmente a seleccionar los mejores palmitos a las hermosas tierras del Ecuador.",
    price: 1800,
    imgScr: "../../img/love.png",
  },
  {
    id: "p3",
    name: "Pizza napolitana",
    description:
      "Nuestro chef se desvía hasta el viejo continente para utilizar los hornos de barro de la mismísima ciudad de Nápoles. (Puede demorar)",
    price: 2000,
    imgScr: "../../img/whoa.png",
  },
  {
    id: "p4",
    name: "Pizza mozzarella",
    description: "Hasta te lo escribimos en italiano, ¿Qué más querés?",
    price: 1500,
    imgScr: "../../img/hello.png",
  },
];

export const AvailableMeals = () => {
  const mealsList = MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      imgScr={meal.imgScr}
    />
  ));

  return (
    <Fragment>
      <div className={styles.sectionTwo}>
        <h2 className={styles.bestSellers}>Best sellers</h2>
        <div className={styles.mealsContainer}>{mealsList}</div>
      </div>
    </Fragment>
  );
};
