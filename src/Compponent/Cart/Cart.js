import React from "react";
import CartChild from "../CartChild/CartChild";

const Cart = (props) => {
  const cart = props.cart;
  //   const total = cart[0].salary_per_month;
  //   console.log(total);
  let total = 0;
  for (const price of cart) {
    // console.log(price.key);
    total = total + price.salary_per_month;
  }
  let cartBtn = document.getElementById("cart-btn");
  if (props.cart.length) {
    cartBtn.classList.remove("d-none");
  }

  //   console.log(parseInt(total));
  return (
    <div>
      <div className="text-center mt-n5 bg-dark">
        <h3 className="text-success">
          Developer Added:
          <span className="text-white"> {props.cart.length}</span>
        </h3>
        <h3 className="text-success">
          Total Cost: <span className="fw-bolder text-white">{total}</span>
        </h3>
      </div>
      {cart.map((dev) => (
        <CartChild cartInfo={dev} key={Math.random() * 1000}></CartChild>
      ))}
      <div className="text-center">
        <button className="btn btn-success my-2 d-none fw-bold" id="cart-btn">
          Hire Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
