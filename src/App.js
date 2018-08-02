import React, { Component } from 'react';
import './styles/app.scss';
import ProductList from './components/ProductList';
import { Route, Switch } from "react-router";
import { Link } from 'react-router-dom'
import Product from './components/Product';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-content">
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/product/:id" component={Product} />
          </Switch>
        </main>
        <Footer />
      </div >
    );
  }
}

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/"><h1>🦐 Exotic Fish Supplies</h1></Link>
      <div className="right">
        <button className="snipcart-checkout snipcart-summary">
          <i className="fa fa-shopping-cart"></i> Checkout (<span className="snipcart-total-items"></span>)
      </button>
      </div>
    </header>
  );
}

const Footer = () => {
  return (
    <footer className="App-footer">
      <div className="left">
        Made by <a href="https://snipcart.com/blog" target="_blank" rel="noopener noreferrer">Snipcart</a> and ⚡ by <a href="https://strapi.io/">Strapi</a>
      </div>
      <div className="right">
        <a href="https://github.com/snipcart/snipcart-strapi-react" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
        <a href="https://twitter.com/snipcart" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a>
      </div>
    </footer>
  );
}

export default App;
