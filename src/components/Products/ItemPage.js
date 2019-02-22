import React from "react";

const ItemPage = props => {
  const { id } = this.props.match.params;
  const { name, price, details } = props.product[id];
  console.log("itempage");

  return (
    <div className="item">
      <div className="card">
        <h3>{name}</h3>
        <p className="price">${price}</p>
        <p>${details}</p>
      </div>
    </div>
  );
};
export default ItemPage;
