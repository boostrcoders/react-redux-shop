import React from "react";
import { Link } from "react-router-dom";

const PageNumber = ({ link, product, style }) => (
  <Link to={`/store/${link}`}>
    <div className="product-image" style={style}>
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
  const style = {
    background: `url(${props.product.picture[0]})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover"
  };
  let delay = props.id + 1;
  let style2 = {
    animation: "fadeIn " + delay * 800 + "ms forwards"
  };

  return (
    <div className="item">
      <div className="card" style={style2}>
        <PageNumber link={props.id} product={props.product} style={style} />
      </div>
    </div>
  );
};
export default ProductItem;
