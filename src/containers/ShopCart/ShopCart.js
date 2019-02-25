import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import NewProduct from "../../components/NewProduct/NewProduct";
import Products from "../../components/Products/Products";
import Cart from "../../components/Products/Cart";
import ItemPage from "../../components/Products/ItemPage";
import Error from "../../components/Error/Error";

//CHECK if Products is exist in Local Storage
if ("products" in localStorage) {
} else {
  const products = [
    {
      name: "iPad",
      price: 200,
      cart: [false, 0],
      favorite: [true, 1],
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      name: "iPhone",
      price: 650,
      cart: [false, 0],
      favorite: [false, 0],
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      name: "Cherry Mobile",
      price: "20",
      cart: [false, 0],
      favorite: [false, 0],
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      name: "Lenovo",
      price: "100",
      cart: [false, 0],
      favorite: [false, 0],
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      name: "Samsung",
      price: "250",
      cart: [false, 0],
      favorite: [false, 0],
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      name: "LG",
      price: "150",
      cart: [false, 0],
      favorite: [false, 0],
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      name: "ViVo",
      price: "80",
      cart: [false, 0],
      favorite: [false, 0],
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      name: "OPPO",
      price: "70",
      cart: [false, 0],
      favorite: [false, 0],
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  ];
  localStorage.setItem("products", JSON.stringify(products));
}

class ShopCart extends Component {
  state = {
    products: JSON.parse(localStorage.getItem("products")),
    cartItems: 0,
    cartTotalPrice: 0,
    favItems: 0,
    newName: "",
    newPrice: "",
    newDetails: ""
  };

  newProductChange(event) {
    let newUpdate;
    if (event.target.name === "name" || event.target.name === null) {
      newUpdate = { newName: event.target.value };
    } else if (event.target.name === "price") {
      newUpdate = { newPrice: event.target.value };
    } else {
      newUpdate = { newDetails: event.target.value };
    }
    this.setState(newUpdate);
  }

  formSubmitted(event) {
    event.preventDefault();

    if (this.state.newName === "") {
      this.alertDanger("name");
    } else if (this.state.newPrice === "") {
      this.alertDanger("price");
    } else if (this.state.newDetails === "") {
      this.alertDanger("details");
    } else {
      this.setState({
        products: [
          ...this.state.products,
          {
            name: this.state.newName,
            price: this.state.newPrice,
            cart: [false, 0],
            favorite: [false, 0],
            details: this.state.newDetails
          }
        ],
        newName: "",
        newPrice: "",
        newDetails: "",
        alertMessage: ""
      });
      this.alertSuccesful(this.state.newName);
    }
  }

  alertDanger(forInput) {
    let alert = document.querySelector(".new-product .alert");
    let message = document.querySelector(".message");
    alert.style.display = "block";
    alert.classList.add("danger");
    alert.style.opacity = 1;
    alert.classList.remove("success");
    message.textContent = `Please input a product ${forInput}!!!`;
    setTimeout(() => this.closeAlert(), 2000);
  }

  alertSuccesful(productName) {
    let alert = document.querySelector(".new-product .alert");
    let message = document.querySelector(".message");
    alert.style.display = "block";
    alert.style.opacity = 1;
    alert.classList.add("success");
    alert.classList.remove("danger");
    message.textContent = `Adding ${productName} in Store is succesful.`;
    setTimeout(() => this.closeAlert(), 2000);
  }

  closeAlert = () => {
    let alert = document.querySelector(".new-product .alert");
    if (alert !== null) {
      alert.style.opacity = 0;
      setTimeout(function() {
        alert.style.display = "none";
        alert.classList.remove("danger", "success");
      }, 500);
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div className="bg-image">
          <header>
            <HeaderNav />
          </header>
          <main>
            <Switch>
              <Route
                path="/store/:id"
                render={props => (
                  <ItemPage {...props} products={this.state.products} />
                )}
              />
              <Route
                path="/"
                render={props => <Products products={this.state.products} />}
                exact
              />

              <Route
                path="/store"
                render={props => <Products products={this.state.products} />}
              />

              <Route
                path="/cart"
                render={props => <Cart products={this.state.products} />}
              />

              <Route
                path="/new"
                render={props => (
                  <NewProduct
                    formSubmitted={this.formSubmitted.bind(this)}
                    newProductChange={this.newProductChange.bind(this)}
                    newName={this.state.newName}
                    newPrice={this.state.newPrice}
                    newDetails={this.state.newDetails}
                    closeAlert={this.closeAlert}
                  />
                )}
              />
              <Route component={Error} />
            </Switch>
          </main>
          <footer>myShoppingCart.com</footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default ShopCart;
