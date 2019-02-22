import React from "react";
import { Link } from "react-router-dom";

const ItemPage = ({ link }) => (
  <Link to={`/store/${link}`}>
    <span className="recipe-button">View Item</span>
  </Link>
);

const ProductItem = props => {
  const { name, price } = props.product;
  let delay = props.id + 1;
  let style = {
    animation: "fadeIn " + delay * 800 + "ms forwards"
  };

  return (
    <div className="item">
      <div className="card" style={style}>
        <h3>{name}</h3>
        <p className="price">${price}</p>
        <ItemPage link={props.id} />

        <button>Add to Cart</button>
      </div>
    </div>
  );
};
export default ProductItem;
