import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Card, Row, Col, Button} from 'react-bootstrap';
import {ProductConsumer} from '../contextApi';
import SearchProduct from '../Components/SearchProduct'
class Product extends Component {
    render() {
        //const {id,title,price,image,inCart}=this.props.product
        const {id,title,price,img,inCart}=this.props.product;
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3">
                <ProductConsumer>
                    {value=>(
                        <div>
                            <Card onClick={()=>{value.handleDetail(id)}} style={{width:'18rem',height:'18rem'}}>
                                <Link to = "/details">
                                    <Card.Img variant="top" src={img} />    
                                </Link>
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <Row>
                                        <Col>
                                        <Button size="sm"
                                            disabled={inCart ? true : false}
                                            onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                            //value.removeItem(id);
                                            }} variant="secondary">
                                                {inCart ? (<span>Remove from the Cart</span>):(<span>Add to Cart</span>)}
                                        </Button>
                                        </Col>
                                        <Col>
                                            <small className="text-muted text-right">${price}</small>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                             <SearchProduct productSearchHandler={value.productSearchHandler(id)}/>
                        </div>
                    )}
                </ProductConsumer>
            </div>
        );
    }
}

export default Product;