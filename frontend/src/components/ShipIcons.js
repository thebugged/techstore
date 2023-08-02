import React from 'react'
import { Row, Col } from 'react-bootstrap'

function ShipIcons() {
  return (
    <div>
      <section className="icons-container">
        <Row>
          <Col>
            <div className="icons">
              <i className="fas fa-shipping-fast"></i>
              <div className="content">
                <h3>Free Shipping</h3>
                <p>orders over $100</p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="icons">
              <i className="fas fa-lock"></i>
              <div className="content">
                <h3>Secure Payment</h3>
                <p>100 secure payment</p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="icons">
              <i className="fas fa-redo-alt"></i>
              <div className="content">
                <h3>Easy Returns</h3>
                <p>10 days returns</p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="icons">
              <i className="fas fa-headset"></i>
              <div className="content">
                <h3>24/7 Support</h3>
                <p>call us anytime</p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default ShipIcons;
