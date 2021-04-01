// import React from "react";
// import {ProductConsumer} from '../contextApi';
// import { Container, Row, Col } from "react-bootstrap";

//import "./Categories.css"
import React, { Component } from 'react';
import {ProductConsumer} from '../contextApi';
import { Container, Row, Col } from "react-bootstrap";
class Categories extends Component {
  render() {
    return (
      <div className="banner-section">
      <Container fluid>
        <Row>
          <Col lg="4">
            <div className="single-banner">
              {/* <img src={require("../../images/banner-1.jpg")} alt="" /> */}
              <div className="inner-text">
                <h4>Electromics</h4>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="single-banner">
              {/* <img src={require("../../images/banner-2.jpg")} alt="" /> */}
              <div className="inner-text">
                <h4>Food's</h4>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="single-banner">
              {/* <img src={require("../../images/banner-3.jpg")} alt="" /> */}
              <div className="inner-text">
                <h4>Cloths</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    );
  }
}

export default Categories;
