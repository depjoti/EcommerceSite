import React, { Component } from 'react';
import {ProductConsumer} from '../contextApi';
import Product from './Product';
import SearchProduct from './SearchProduct';
class ProductList extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <h1>Find Your Products</h1> 
                </div>
                <div className="row">
                    <ProductConsumer>
                        {(value)=>{
                
                            return value.products.map(product=>{
                                return <Product key={product.id} product={product}/>
                            })
                        }}
                    </ProductConsumer>
                </div>               
            </div>
        );
    }
}

export default ProductList;