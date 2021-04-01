
import React, {Component} from 'react';
import {ProductConsumer} from '../contextApi';


const SearchProduct = ({id,title,price,handlechange}) =>{
    return(
        <ProductConsumer >
            <input
                className="Search"
                type="Search"
                placeholder = {id,title,price}
                onChange={handlechange} 
            />
        </ProductConsumer>
    );
}

export default SearchProduct;