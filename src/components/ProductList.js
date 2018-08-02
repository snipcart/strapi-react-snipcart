import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Product from './Product';
import BuyButton from './BuyButton';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: []
    }
  }

  async componentDidMount() {
    let response = await fetch("https://snipcart-strapi.herokuapp.com/product");
    if (!response.ok) {
      return
    }

    let products = await response.json()
    this.setState({ loading: false, products: products })
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="ProductList">
          <h2 className="ProductList-title">Available Products ({this.state.products.length})</h2>
          <div className="ProductList-container">
            {this.state.products.map((product, index) => {
              return (
                <div className="ProductList-product" key={product.id}>
                  <Link to={`/product/${product.id}`}>
                    <h3>{product.name}</h3>
                    <img src={product.image ? `https://snipcart-strapi.herokuapp.com${product.image.url}` : ""}
                      alt={product.name} />
                  </Link>
                  <BuyButton product={product} />
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (<h2 className="ProductList-title">Waiting for API...</h2>);
  }
}

export default ProductList;