import React from "react";

const NewProduct = props => {
  return (
    <div className="new-product">
      <form className="new-product-form" onSubmit={props.formSubmitted}>
        <div className="new-product-inputs">
          <div className="name-input">
            <input
              name="name"
              placeholder="Name"
              onChange={props.newProductChange}
              required
              value={props.newName}
            />
          </div>

          <div className="price-input">
            <input
              name="price"
              placeholder="Price"
              onChange={props.newProductChange}
              required
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
