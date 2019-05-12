import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Product from './pages/admin/Product'
import ProductList from './pages/client/Product/ProductList'
import ProductDetail from './pages/client/Product/ProductDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Product} />
        <Route path="/list" exact component={ProductList} />
        <Route path="/detail/:slug" component={ProductDetail} />
      </Router>
    );
  }
}

export default App;
