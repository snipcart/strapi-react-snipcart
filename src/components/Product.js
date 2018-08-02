import React, { Component } from 'react';
import BuyButton from './BuyButton';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, product: {} }
  }

  async componentDidMount() {
    let response = await fetch(`https://snipcart-strapi.herokuapp.com/product/${this.props.match.params.id}`)
    let data = await response.json()
    this.setState({
      loading: false,
      product: data
    })
    console.log(this.state.pro)
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="product">
          <div className="product__information">
            <h2 className="Product-title">{this.state.product.name}</h2>
            <img src={this.state.product.image ? `https://snipcart-strapi.herokuapp.com/${this.state.product.image.url}` : ""} alt={this.state.product.name} />
            <BuyButton {...this.state} />
          </div>
          <div className="product__description">
            {this.state.product.description}
          </div>
        </div>
      );
    }

    return (<h2>Waiting for API...</h2>);
  }
}

export default Product;