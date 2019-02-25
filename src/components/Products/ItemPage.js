import React from "react";
import Error from "../../components/Error/Error";
const ItemPage = props => {
  const { id } = props.match.params;

  if (props.products[id] === undefined) {
    return <Error />;
  }
  console.log(props.products[id]);
  const { name, price, details } = props.products[id];

  return (
    <div className="products">
      <div className="product-container">
        <div className="product-images" />
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-details">{details}</p>
          <p className="product-price">${price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default ItemPage;
