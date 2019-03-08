import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import NewProduct from "../../components/NewProduct/NewProduct";
import Products from "../../components/Products/Products";
import Cart from "../../components/Products/Cart";
import ItemPage from "../../components/Products/ItemPage";
import BreadCrumbs from "../../components/Products/BreadCrumbs";

import Error from "../../components/Error/Error";

//CHECK if Products is exist in Local Storage
if ("products" in localStorage) {
} else {
  const products = [
    {
      productId: 0,
      name: "iPad",
      picture: [
        "/assets/ipad1.jpeg",
        "/assets/ipad2.jpeg",
        "/assets/ipad3.jpeg",
        "/assets/ipad4.jpeg"
      ],
      defaultPic: 0,
      activePic: 0,
      price: 200,
      cart: [false, 0],
      favorite: [false, 1],
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      productId: 1,
      name: "iPhone",
      picture: [
        "/assets/iphone1.jpeg",
        "/assets/iphone2.jpeg",
        "/assets/iphone3.png",
        "/assets/iphone4.jpeg"
      ],
      defaultPic: 0,
      activePic: 0,
      price: 650,
      cart: [false, 0],
      favorite: [false, 0],
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      productId: 2,
      name: "Cherry Mobile",
      picture: ["/assets/placeholder.png"],

      defaultPic: 0,
      activePic: 0,
      price: "20",
      cart: [false, 0],
      favorite: [false, 0],
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      productId: 3,
      name: "Lenovo",
      picture: ["/assets/placeholder.png"],
      defaultPic: 0,
      activePic: 0,
      price: "100",
      cart: [false, 0],
      favorite: [false, 0],
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      productId: 4,
      name: "Samsung",
      picture: ["/assets/placeholder.png"],
      defaultPic: 0,
      activePic: 0,
      price: "250",
      cart: [false, 0],
      favorite: [false, 0],
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      productId: 5,
      name: "LG",
      picture: ["/assets/placeholder.png"],
      defaultPic: 0,
      activePic: 0,
      price: "150",
      cart: [false, 0],
      favorite: [false, 0],
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      productId: 6,
      name: "ViVo",
      picture: ["/assets/placeholder.png"],
      defaultPic: 0,
      activePic: 0,
      price: "80",
      cart: [false, 0],
      favorite: [false, 0],
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      productId: 7,
      name: "OPPO",
      picture: ["/assets/placeholder.png"],
      defaultPic: 0,
      activePic: 0,
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
    console.log(event.sender);
    // if (
    //   event.sender.config.name === "name" ||
    //   event.sender.config.name === null
    // ) {
    //   newUpdate = { newName: event.target.value };
    // } else if (event.sender.config.name === "price") {
    //   newUpdate = { newPrice: event.target.value };
    // } else {
    //   newUpdate = { newDetails: event.target.value };
    // }
    // this.setState(newUpdate);
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
  changeActivePic = e => {
    let products = [...this.state.products];
    products[e.target.attributes[1].value].activePic = e.target.id;

    this.setState(products);
    console.log(e.target);
    console.log(products);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="bg-image">
          <header>
            <HeaderNav />
          </header>
          <main>
            <BreadCrumbs />
            <Switch>
              <Route
                path="/"
                render={props => <Products products={this.state.products} />}
                exact
              />
              <Route
                path="/store/:id"
                render={props => (
                  <ItemPage
                    {...props}
                    products={this.state.products}
                    changeActivePic={this.changeActivePic}
                  />
                )}
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
