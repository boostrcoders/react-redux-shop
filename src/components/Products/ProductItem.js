import React from "react";
import { Link } from "react-router-dom";

const PageNumber = ({ link, product }) => (
  <Link to={`/store/${link}`}>
    <h3>{product.name}</h3>
    <p className="price">${product.price}</p>
  </Link>
);

const ProductItem = props => {
  let delay = props.id + 1;
  let style = {
    animation: "fadeIn " + delay * 800 + "ms forwards"
  };

  return (
    <div className="item">
      <div className="card" style={style}>
        <PageNumber link={props.id} product={props.product} />
        <button>Add to Cart</button>
      </div>
    </div>
  );
};
export default ProductItem;
