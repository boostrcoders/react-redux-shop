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
      id={props.id}
      pid={props.pid}
      style={style}
      onClick={props.changeActivePic}
    >
      <div className={props.activePic !== props.id ? "" : "active"} />
    </div>
  );
};
export default ProductThumbnail;
