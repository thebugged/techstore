import React, { useEffect, useState } from 'react';
import { Button, Row, Col, ListGroup, Image, Card, Modal } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PayPalButton } from 'react-paypal-button-v2';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getOrderDetails, payOrder, deliverOrder } from '../actions/orderActions';
import { ORDER_PAY_RESET, ORDER_DELIVER_RESET } from '../constants/orderConstants';

function PaymentModal({ show, onHide, amount, onSuccess }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      {/* <Modal.Header closeButton>
        <Modal.Title>Make Payment</Modal.Title>
      </Modal.Header> */}
      <Modal.Body style={{ background: 'white' }} closeButton>
        <PayPalButton amount={amount} onSuccess={onSuccess} />
      </Modal.Body>
    </Modal>
  );
}

function OrderPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sdkReady, setSdkReady] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;
  
  const orderDeliver = useSelector(state => state.orderDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const itemsPrice = order && order.orderItems
    ? order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    : 0;

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }

    if (!order || order._id !== Number(id)) {
      dispatch(getOrderDetails(id));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    } else {
      setIsPaid(true);
    }
  }, [userInfo, navigate, dispatch, order, id]);

  const addPayPalScript = () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://www.paypal.com/sdk/js?client-id=AVD3GkDFehOhZCWNjSffOuNyNzsihMJca6krMjT_zDcmZytD4XPxhPWfwQDz_nFQaX-i3Rc4nGDoToID';
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(id, paymentResult));
    setIsPaid(true);
    setShowPaymentModal(false);
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          {!isPaid && (
            <>
              
              {!sdkReady ? (
                <Loader color="black" />
              ) : (
                <Button
                  variant="success"
                  onClick={() => setShowPaymentModal(true)}
                >
                  Pay Now
                </Button>
              )}
            </>
          )}
          {isPaid && (
            <>
              
              <Row>
              <Col md={8}>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h2>SHIPPING</h2>
                      <p>
                        <strong>Name: </strong> {order.user.name}
                      </p>
                      <p>
                        <strong>Email: </strong>
                        <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                      </p>
                      <p>
                        <strong>Shipping to: </strong>
                        {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                        {order.shippingAddress.postalCode}, {order.shippingAddress.country}
                      </p>
                      {order.isDelivered ? (
                        <Message variant="success">Delivered on {order.deliveredAt}</Message>
                      ) : (
                        <Message variant="light">Not Delivered</Message>
                      )}
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <h2>PAYMENT METHOD</h2>
                      <p>
                        <strong>Method: </strong>
                        {order.paymentMethod}
                      </p>
                      {isPaid ? (
                        <Message variant="success">Paid {order.paidAt}</Message>
                      ) : (
                        <Message variant="light">Not Paid</Message>
                      )}
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <h2>ORDER ITEMS</h2>
                      {order.orderItems.length === 0 ? (
                        <Message variant="info">Order is empty</Message>
                      ) : (
                        <ListGroup variant="flush">
                          {order.orderItems.map((item, index) => (
                            <ListGroup.Item key={index}>
                              <Row>
                                <Col md={1}>
                                  <Image src={item.image} alt={item.name} fluid rounded />
                                </Col>

                                <Col>
                                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </Col>

                                <Col md={4}>
                                  {item.qty} X ${item.price} = ${(item.qty * item.price).toFixed(2)}
                                </Col>
                              </Row>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      )}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={4}>
                  <Card>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <h2>Order Summary</h2>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <Row>
                          <Col>Items:</Col>
                          <Col>${itemsPrice}</Col>
                        </Row>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <Row>
                          <Col>Shipping:</Col>
                          <Col>${order.shippingPrice}</Col>
                        </Row>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <Row>
                          <Col>Tax:</Col>
                          <Col>${order.taxPrice}</Col>
                        </Row>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <Row>
                          <Col>Total:</Col>
                          <Col>${order.totalPrice}</Col>
                        </Row>
                      </ListGroup.Item>
                      <br/>
                     
                    </ListGroup>
                    {loadingDeliver && <Loader />}
                    {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                        <ListGroup.Item style={{ marginBottom: '10px', marginTop: '10px' }}>
                            <Button
                                type='button'
                                style={{ 
                                  padding: '10px 1',
                                  margin: '0 auto',
                                  display: 'block', 
                                  textAlign: 'center' }}
                                onClick={deliverHandler}
                            >
                                Mark As Delivered
                            </Button>
                        </ListGroup.Item>

                        
                    )}

                  </Card>
                </Col>
              </Row>
            </>
          )}
        </div>
      )}
      <PaymentModal
        show={showPaymentModal}
        onHide={() => setShowPaymentModal(false)}
        amount={order.totalPrice}
        onSuccess={successPaymentHandler}
      />
    </div>
  );
}

export default OrderPage;
