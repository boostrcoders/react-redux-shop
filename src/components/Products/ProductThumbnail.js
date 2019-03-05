import React from "react";

const ProductThumbnail = props => {
  const style = {
    backgroundImage: `url(${props.picture})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  };

  return (
    <div
      className="thumbnails-item"
      pid={props.pid}
      id={props.id}
      style={style}
      onClick={props.changeActivePic}
    />
  );
};
export default ProductThumbnail;
