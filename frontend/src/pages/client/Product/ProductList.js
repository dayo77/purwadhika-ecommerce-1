import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[]
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            console.log('berhasil')
            this.setState({ products : res.data });
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.products.map(product => (
                        <div className="col-sm-3">
                                <div className="card">
                                    <img src={`http://localhost:8000/img/products/${product.variants[0].images[0]}`} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <h6 className="card-title">{product.variants[0].description.substring(0, 100)}...</h6>
                                        <p className="card-text">Rating {product.rating}</p>
                                        {product.variants[0].discount > 0 && <del><p className="card-text">Rp.{product.variants[0].price}</p></del>}
                                        <p className="card-text">Rp.{product.variants[0].price - product.variants[0].discount / 100 * product.variants[0].price}</p>
                                        <Link to={`/detail/${product.slug}`} className="btn btn-primary">Detail</Link>
                                    </div>
                                </div>
                        </div>
                    ))} 
                </div>
            </div>
        );
    }
}

export default ProductList;