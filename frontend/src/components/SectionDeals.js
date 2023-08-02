import React from 'react'
import {  Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SectionDeals = () => {
  
  return (
    <div className="deal-container"> 
      
          <Container>
            <Row>
              <Col sm={12} md={6} >
                <div className="content">
                  <h3>Today's Featured Deal</h3>
                  <h1>up to 50% off</h1>
                  <br/>
                  <p>Attention iPhone enthusiasts! For 24 hours only, get an exclusive offer on the iPhone 11 Pro Max. Don't miss this chance to secure your discounted device. Limited stock available – grab your iPhone 11 Pro Max now and stay ahead with the latest technology</p>
                </div>
                
                <Link to="/store" className="btn btn-dark ">Shop now</Link>
                
              </Col>
              
              <Col sm={12} md={6} >
              <br/>
                <div className="image">
                  <img src={`${process.env.PUBLIC_URL}/images/sale.jpeg`} alt="" fluid='true' />
                </div>
              </Col>
            </Row>
          </Container>

          
    </div>
  );
};

export default SectionDeals;
