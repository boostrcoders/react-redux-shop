import React from "react";

const ProductImage = props => {
  const style = {
    backgroundImage: `url(${props.picture})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    transform: `translateY(${props.active * -500}px)`
  };
  return (
    <div
      className="product-image-item"
      id={props.id}
      pid={props.pid}
      style={style}
    />
  );
};
export default ProductImage;
