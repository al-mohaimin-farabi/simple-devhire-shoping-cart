import React from "react";
import "./CartChild.css";
const CartChild = (props) => {
  const { name, img, salary_per_month } = props.cartInfo;

  return (
    <div className="bg-white my-3 p-2 my-style">
      <div className="img-box">
        <img src={img} alt="" />
      </div>
      <div className="text-box">
        <p className="text-dark">Name: {name}</p>
        <p className="text-dark">Salary: {salary_per_month}</p>
      </div>
    </div>
  );
};

export default CartChild;
