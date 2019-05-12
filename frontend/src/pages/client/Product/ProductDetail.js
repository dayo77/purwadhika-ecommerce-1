import React, { Component } from 'react';
import axios from 'axios';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product:null
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/products/${this.props.match.params.slug}`)
        .then(res => {
            console.log(res.data)
            this.setState({ product : res.data });
        })
    }

    render() {
        if (this.state.product === null) {
            return 'loading...';
        }
        
        return (
            <div className="container">
                <div className="row">

                    <div className="col-sm-12">
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">

                                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        </ol>
                                        <div className="carousel-inner">

                                        {this.state.product.variants[0].images.map(product => (

                                            <div className="carousel-item active">
                                            <img src={`http://localhost:8000/img/products/${this.state.product.variants[0].images[0]}`} className="d-block w-100" alt="..."/>
                                            </div>

                                            ))}

                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                
                                
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{this.state.product.name}</h5>
                                        <p className="card-text">{this.state.product.variants[0].description}</p>
                                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {this.state.product.name}
            </div>
        );
    }
}

export default ProductDetail;