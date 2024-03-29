import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import "./CardContainer.css";

const CardContainer = () => {
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./info.JSON")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    // console.log(newCart[0].key);
    // for (const key of newCart) {
    //   newCart.find((cart) => cart.key === key.key);;
    // }

    // console.log(cart);
  };

  return (
    <main className="grid py-2 mb-3">
      <div className="container-fluid mt-2">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {cards.map((card) => (
            <Card
              key={Math.random() * 1000}
              card={card}
              handleAddToCart={handleAddToCart}
            ></Card>
          ))}
        </div>
      </div>
      <div className="fixed">
        <Cart cart={cart}></Cart>
      </div>
    </main>
  );
};

export default CardContainer;
