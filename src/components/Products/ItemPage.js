import React from "react";

class ItemPage extends React.Component {
  state = {
    activeProduct: []
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);

    this.setState({
      activeProduct: id
    });
  }

  render() {
    // const { name, price, id } = this.state.activeProduct;
    return (
      <div className="item">
        <div className="card">
          {/* <h3>{name}</h3>
          <p className="price">${price}</p> */}
          <p>${this.state.activeProduct}</p>
        </div>
      </div>
    );
  }
}
export default ItemPage;
