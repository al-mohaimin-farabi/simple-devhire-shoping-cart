import React from "react";
import "./Card.css";

const Card = (props) => {
  //   console.log(props);
  const {
    name,
    salary_per_month,
    subscriber,
    youtube_channel_name,
    img,
    country,
  } = props.card;
  return (
    <div className="col">
      <div className="card h-100 bg-dark text-white border-2 border-secondary rounded-5">
        <div className="img-box">
          <img src={img} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">Name : {name}</h5>
          <p className="card-text">YouTube Channel : {youtube_channel_name}</p>
          <p>Country : {country}</p>
          <p>Subscriber : {subscriber}</p>
          <p>Salary : {salary_per_month} USD Per Month</p>
        </div>
        <div className="card-footer bg-transparent border-0">
          <button
            className="btn btn-success text-white mb-2"
            onClick={() => props.handleAddToCart(props.card)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
