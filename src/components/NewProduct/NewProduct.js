import React from "react";
import CKEditor from "ckeditor4-react";

const NewProduct = props => {
  return (
    <div className="new-product">
      <form className="new-product-form" onSubmit={props.formSubmitted}>
        <h1>Create New Product</h1>
        <div className="alert">
          <span className="closebtn" onClick={props.closeAlert}>
            &times;
          </span>
          <span className="message" />
        </div>

        <div className="new-product-inputs">
          <div />
          <div className="name-input">
            <CKEditor
              className="input-box"
              name="name"
              data={props.newName}
              onChange={props.newProductChange}
              defaultValue={props.newName}
              type="inline"
              config={{ name: "name" }}
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
