import React from "react";
import Error from "../../components/Error/Error";
import ProductThumbnail from "./ProductThumbnail";
import ProductImage from "./ProductImage";
import PrevNext from "./PrevNext";
const ItemPage = props => {
  const { id } = props.match.params;

  if (props.products[id] === undefined) {
    return <Error />;
  }

  const {
    name,
    price,
    details,
    picture,
    activePic,
    productId
  } = props.products[id];

  return (
    <div className="products">
      <div className="product-container">
        <div className="product-image-container">
          <div className="product-roll">
            {picture.map((picture, key) => {
              return (
                <ProductImage
                  key={key}
                  id={key}
                  pid={productId}
                  active={activePic}
                  picture={picture}
                />
              );
            })}
          </div>
        </div>
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-details">{details}</p>
          <div className="thumbnails">
            {picture.map((picture, key) => {
              return (
                <ProductThumbnail
                  key={key}
                  id={key}
                  pid={productId}
                  activePic={activePic}
                  picture={picture}
                  pictureslength={props.products[id].picture.length}
                  changeActivePic={props.changeActivePic}
                />
              );
            })}
          </div>
          <div className="product-price-btn">
            <p className="product-price">${price}.00</p>

            <button className="product-btn">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="product-prevnext">
        <PrevNext
          products={props.products}
          activeProduct={id}
          pid={productId}
          length={props.products.length}
        />
      </div>
    </div>
  );
};
export default ItemPage;
