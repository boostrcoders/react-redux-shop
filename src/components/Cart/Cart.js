import React from "react";
import ProductItem from "../Products/ProductItem";

const Cart = props => {
  return (
    <div className="products">
      <h1>Cart</h1>
      <div className="products-list">
        {props.products.map((product, key) => {
          return <ProductItem key={key} id={key} product={product} />;
        })}
      </div>
    </div>
  );
};
export default Cart;
