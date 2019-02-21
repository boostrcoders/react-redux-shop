import React from "react";

const NewProduct = props => {
  return (
    <div className="new-product">
      <h1>Create New Product</h1>
      <div className="alert">
        <span className="closebtn" onClick={props.closeAlert}>
          &times;
        </span>
        <span className="message" />
      </div>
      <form className="new-product-form" onSubmit={props.formSubmitted}>
        <div className="new-product-inputs">
          <div className="name-input">
            <input
              name="name"
              placeholder="Name"
              onChange={props.newProductChange}
              value={props.newName}
            />
          </div>

          <div className="price-input">
            <input
              type="number"
              min="0"
              name="price"
              placeholder="Price"
              onChange={props.newProductChange}
              value={props.newPrice}
            />
          </div>
          <div className="details-input">
            <textarea
              name="details"
              onChange={props.newProductChange}
              placeholder="Write something.."
              value={props.newDetails}
            />
          </div>
        </div>

        <div className="new-product-btn">
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};
export default NewProduct;
