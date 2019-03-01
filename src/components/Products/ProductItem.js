import React from "react";
import { Link } from "react-router-dom";

const PageNumber = ({ link, product }) => (
  <Link to={`/store/${link}`}>
    <div
      className="product-image"
      style={{
        background: `url(${product.picture[0]}) no-repeat center fixed`,
        backgroundSize: "cover"
      }}
    >
      <div className="info">
        <div className="info-txt">
          <h3>{product.name}</h3>
          <p className="price">${product.price}.00</p>
        </div>
        <div className="info-btn">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
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
      </div>
    </div>
  );
};
export default ProductItem;
