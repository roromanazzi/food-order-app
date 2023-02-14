import React, { Fragment } from "react";
import { AvailableMeals } from "./AvailableMeals";
import { MealsSummary } from "./MealsSummary";

export const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};
