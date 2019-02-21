import React from "react";

const ProductItem = props => {
  const { name, price, details } = props.product;
  let delay = props.id + 1;
  let style = {
    animation: "fadeIn " + delay * 500 + "ms forwards"
  };

  return (
    <div className="item">
      <div className="card" style={style}>
        <h3>{name}</h3>
        <p className="price">${price}</p>
        <p>{details}</p>

        <button>Add to Cart</button>
      </div>
    </div>
  );
};
export default ProductItem;
