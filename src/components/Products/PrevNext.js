import React from "react";
import { Link } from "react-router-dom";

const PrevProduct = ({ activeProduct, link, style, picture, pid, pname }) => (
  <Link to={`/store/${link}`}>
    <div style={style} className="prev-container">
      <div
        className="prevnext-nav-image"
        pid={pid}
        style={{
          backgroundImage: `url(${picture})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      />
      <div className="product-name">
        {activeProduct === 0 ? "" : pname[activeProduct - 1].name}
      </div>
    </div>
  </Link>
);
const NextProduct = ({
  activeProduct,
  link,
  style,
  pid,
  picture,
  pname,
  length
}) => (
  <Link to={`/store/${link}`}>
    <div style={style} className="next-container">
      <div
        className="prevnext-nav-image"
        pid={pid}
        style={{
          backgroundImage: `url(${picture})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      />
      <div className="product-name">
        {activeProduct === length - 1 ? "" : pname[activeProduct + 1].name}
      </div>
    </div>
  </Link>
);

const PrevNext = props => {
  const activeProduct = parseInt(props.activeProduct);
  // const prevPage = activeProduct === 0 ? "" : activeProduct - 1;
  // const nextpage = activeProduct === props.length - 1 ? "" : activeProduct + 1;
  return (
    <div className="product-prevnext-container">
      <div className="prev">
        <PrevProduct
          activeProduct={activeProduct}
          link={activeProduct - 1}
          pid={props.pid}
          pname={props.products}
          picture={
            activeProduct === 0
              ? ""
              : props.products[activeProduct - 1].picture[0]
          }
          style={
            activeProduct === 0 ? { display: "none" } : { display: "flex" }
          }
        />
      </div>
      <div className="divider" />
      <div className="next">
        <NextProduct
          activeProduct={activeProduct}
          link={activeProduct + 1}
          pid={props.pid}
          pname={props.products}
          length={props.length}
          picture={
            activeProduct === props.length - 1
              ? ""
              : props.products[activeProduct + 1].picture[0]
          }
          style={
            activeProduct === props.length - 1
              ? { display: "none" }
              : { display: "flex" }
          }
        />
      </div>
    </div>
  );
};
export default PrevNext;
