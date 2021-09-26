import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  // const fbIcon = <FontAwesomeIcon icon={fabfafacebook} />;
  return (
    <div className="col">
      <div className="card h-100 bg-dark text-white border-2 border-secondary rounded-5">
        <div className="img-box">
          <img src={img} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">Name : {name}</h5>
          <p className="card-text">YouTube Channel : {youtube_channel_name}</p>
          <p className="card-text">Country : {country}</p>
          <p className="card-text">Subscriber : {subscriber}</p>
          <p className="card-text">Salary : {salary_per_month} USD Per Month</p>
        </div>
        <div className="card-footer bg-transparent border-0">
          <div className="mb-3 d-flex  align-items-center">
            <span className="me-2">Social Link: </span>
            <a href="/#">
              <i className="fab fa-facebook fa-2x me-3 text-secondary"></i>
            </a>
            <a href="/#">
              <i className="fab fa-twitter fa-2x me-3 text-secondary"></i>
            </a>
            <a href="/#">
              <i className="fab fa-github fa-2x me-3 text-secondary"></i>
            </a>
          </div>
          <button
            className="btn btn-success text-white mb-2"
            onClick={() => props.handleAddToCart(props.card)}
          >
            {cartIcon} Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
