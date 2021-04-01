import React, { Component } from 'react';
import {ProductConsumer} from '../contextApi';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const {id,title,img,info,price,company,inCart}=value.detailProduct;
                    return(
                        <div className="container">
                            <div className="col-10 mx-auto text-center">
                                <h1>Your Product Details </h1>
                            </div>
                            
                            <div className="row">
                                <div className="col-4 mx-auto col-md-4">
                                    <img src={img} className="img-fluid"/>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-4 mx-auto col-md-4">
                                    <h4>Product: {title}</h4>
                                    <h5>
                                        <strong>Price: <span>$</span> {price} </strong>
                                    </h5>
                                    <p>Some information about the product: </p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to="/">Back to the Home Page</Link>
                                    </div>
                                    <Button size="sm"
                                        disabled={inCart ? true : false}
                                        onClick={()=>{
                                        value.addToCart(id);
                                        //value.removeItem(id);
                                        value.openModal(id);
                                        }} variant="secondary">
                                            {inCart ? (<span>Remove from the Cart</span>):(<span>Add to Cart</span>)}
                                    </Button>
                                </div>

                            </div>
                        </div> 
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;

