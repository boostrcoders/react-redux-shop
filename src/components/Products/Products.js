import React from "react";
import ProductItem from "./ProductItem";

const Products = props => {
  return (
    <div className="products">
      <h1>Store</h1>
      <div className="products-list">
        {props.products.map((product, key) => {
          return <ProductItem key={key} id={key} product={product} />;
        })}
      </div>
    </div>
  );
};
export default Products;
