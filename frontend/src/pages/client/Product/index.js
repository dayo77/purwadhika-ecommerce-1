import React, { Component, Fragment } from 'react';
import axios from 'axios'
import ProductDetail from './ProductDetail'
import ProductList from './ProductList'

class Product extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        id: '',
        name: '',
        variants: [],
      },
      formImages: {},
      hasVariant: null,
      products: null,
    };
  }


  getProducts = () => {
    axios.get('http://localhost:8000/api/products')
      .then(res => {
        this.setState({ products: res.data })
      })
  }


  render() {
    const {  products } = this.state;

    return (
      <Fragment>
        <ProductList
          data = {products}
          getProducts={this.getProducts}
        />
      </Fragment>
    );
  }
}

export default Product;