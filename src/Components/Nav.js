import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../contextApi';
import { FaShoppingCart } from 'react-icons/fa';
//import { NavbarBrand } from 'react-bootstrap';
//FaShoppingCart

export default class Nab extends React.Component{
    render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#">BoomersHub Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link eventkey={0} to="/">Home</Link>
                        </Nav>
                        <Nav className="mr-auto">
                            <Link eventkey={1} to="/category"> Categories</Link>
                        </Nav>
                        <Nav className="mr-auto">
                            <Link eventkey={2} to="/cart"> Checkout</Link>
                        </Nav>
                        <Nav>
                            <ProductConsumer>
                                {(value)=>{
                                    return <Link style={{color:"mediumspringgreen"}} eventkey={2} to = "/cart">
                                        <FaShoppingCart />
                                        My cart({value.cart.length})
                                    </Link>
                                }}
                            </ProductConsumer>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}