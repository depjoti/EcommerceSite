import React, { Component } from 'react';
import {ProductConsumer} from '../contextApi';
import {Button,Col,Container,Row} from 'react-bootstrap';
class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        if(value.cart.length >0){
                            return(
                                <div>
                                    <div><h1>Your Cart</h1></div>
                                    <div className="container-fluid text-center">
                                        <div className="row">
                                            <div className="col-10 mx-auto col-lg-2">
                                                <strong>Products</strong>
                                            </div>
                                            <div className="col-10 mx-auto col-lg-2">
                                                <strong>Name of Product</strong>
                                            </div>
                                            <div className="col-10 mx-auto col-lg-2">
                                                <strong>Price</strong>
                                            </div>
                                            <div className="col-10 mx-auto col-lg-2">
                                                <strong>Quantity</strong>
                                            </div>
                                            <div className="col-10 mx-auto col-lg-2">
                                                <strong>Remove</strong>
                                            </div>
                                            <div className="col-10 mx-auto col-lg-2">
                                                <strong>Total</strong>
                                            </div>
                                        </div>
                                    </div>
                                    {value.cart.map(cartData=>{
                                        return(
                                            <div className="container-fluid text-center">
                                                <div className="row">
                                                    <div className="col-10 mx-auto col-lg-2">
                                                        <img style={{width:'6rem',height:'4rem'}} src={cartData.image} className="img-fluid" />
                                                    </div>
                                                    <div className="col-10 mx-auto col-lg-2">
                                                        {cartData.title}
                                                    </div>
                                                    <div className="col-10 mx-auto col-lg-2">
                                                        {cartData.price}
                                                    </div>
                                                    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                                                        <input size="sm" className="qtyminus" value='-'onClick={()=>value.decrement(cartData.id)}/>
                                                        {cartData.count}
                                                        <input size="sm" className="qtyplus" value='+' onClick={()=>value.increment(cartData.id)}/>
                                                    </div>
                                                    <div className="col-10 mx-auto col-lg-2">
                                                        <Button variant="secondary" onClick={()=>{value.removeItem(cartData.id)}} size="sm">Remove</Button>
                                                    </div>
                                                    <div className="col-10 mx-auto col-lg-2">
                                                        {cartData.total}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <hr></hr>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <strong>Total</strong>
                                                {value.cartSubTotal}
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            )
                        } else{
                            return(
                                <div>
                                    <h3>Currently your cart is <span style={{color:"red"}}>Empty</span></h3>
                                </div>
                            )
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart;