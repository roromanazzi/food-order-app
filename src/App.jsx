import "./App.css";

import { useState } from "react";

import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import pizza from "./img/pizzaFondo.png";
import { CartProvider } from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <section className="background">
        <Header onShowCart={showCartHandler} />
        <main className="main">
          <img
            src={pizza}
            alt="Pizza sonriente"
            className="pizzaSonriente"
          ></img>
          <Meals />
        </main>
      </section>
    </CartProvider>
  );
}

export default App;
