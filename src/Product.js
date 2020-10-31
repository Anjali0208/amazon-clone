import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, rating, price, image, title }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        rating: rating,
        price: price,
        image: image,
        title: title,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              //eslint-disable-next-line
              <span>⭐</span> /**rating goes into row witout using css flex */
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
