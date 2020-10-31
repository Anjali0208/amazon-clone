import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./src/StateProvider";

function CheckoutProduct({ id, rating, price, image, title }) {
  const [{ basket }, dispatch] = useStateValue();

  const RemoveFromBasket = () => {
    // remove from basket
    dispatch({
      type: "REMOVING_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              //eslint-disable-next-line
              <span>⭐</span>
            ))}
        </div>

        <button onClick={RemoveFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
