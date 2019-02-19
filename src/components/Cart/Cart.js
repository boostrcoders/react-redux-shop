import React from "react";
import ProductItem from "../Products/ProductItem";

const Cart = props => {
  return (
    <div className="products">
      <h1>Cart</h1>
      {props.products.map((product, key) => {
        return <ProductItem key={key} name={product.name} />;
      })}
    </div>
  );
};
export default Cart;
