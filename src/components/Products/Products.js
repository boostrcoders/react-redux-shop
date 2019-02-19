import React from "react";
import ProductItem from "./ProductItem";

const Products = props => {
  return (
    <div className="products">
      <h1>Store</h1>
      {props.products.map((product, key) => {
        return <ProductItem key={key} name={product.name} />;
      })}
    </div>
  );
};
export default Products;
