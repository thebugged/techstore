import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'

import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails, createProductReview } from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'

function DescriptionPage() {
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product} = productDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  
  const productReviewCreate = useSelector(state => state.productReviewCreate)
    const {
        loading: loadingProductReview,
        error: errorProductReview,
        success: successProductReview,
    } = productReviewCreate

  useEffect(() => {
      if (successProductReview) {
          setRating(0)
          setComment('')
          dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
      }
      dispatch(listProductDetails(id))
   
  }, [dispatch, id, successProductReview])


  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)
  }
  // const addToCartHandler = () => {
  //   const previousUrl = window.location.href; // Store the current URL before navigating
  
  //   // Navigate to the new URL
  //   navigate(`/cart/${id}?qty=${qty}`);
  
  //   // Reload the previous URL with a hard refresh
  //   setTimeout(() => {
  //     window.location.href = previousUrl;
  //   }, 0);
  // };

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createProductReview(
        id, {
        rating,
        comment
    }
    ))
}



  return (
    <div>
      
        <Link to='/store' className='btn btn-dark my-3' style={{ fontSize: '1.rem', fontWeight: 300 }}> &#8592;  Go Back</Link>
        {loading?
          <Loader />
          : error 
          ? <Message variant = 'danger'> {error} </Message>
          : (
            <div>
              <Row>
              <Col md={6} sm={12}>
                <Image src={product.image} alt={product.name} fluid rounded />
              
              </Col>
              <Col md ={3}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h3 className='h3-md'>{product.name}</h3>
                    {/* <h5>by {product.author}</h5> */}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Rating value={product.rating} text = {`${product.numReviews} reviews`} color={'#f8e825'} />
                  </ListGroup.Item>
                  
                  <ListGroup.Item>
                    Price: $ {product.price}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Overview: {product.description}
                  </ListGroup.Item>

                </ListGroup>

              </Col>
              <Col md ={3}>
                <Card>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>${product.price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col> 
                          {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    {product.countInStock > 0 && (
                      <ListGroup.Item>
                        <Row>
                            <Col>Qty: </Col>
                            <Col xs ='auto' className='my-1'>
                              <Form.Select 
                                size ='sm'
                                value = {qty}
                                onChange = {(e) => setQty(e.target.value)}
                                >
                                {
                                    [...Array(product.countInStock).keys()].map((x) =>(
                                      <option key = { x + 1} value ={x + 1}>
                                        {x + 1}
                                      </option>
                                    ))
                                }
                              </Form.Select>
                            </Col>
                        </Row>

                      </ListGroup.Item>
                    ) }

                    <ListGroup.Item>
                      <Button 
                      onClick = {addToCartHandler}
                      className='btn-block text-center' 
                      type='button' 
                      style={{width: '100%'}} 
                      disabled={product.countInStock === 0}
                      ><i className='fas fa-cart-plus'> </i>
                        &nbsp;
                        Add to Cart
                      </Button>
                    </ListGroup.Item>

                  </ListGroup>
                </Card>
              </Col>
              </Row>


              <Row>
                <Col md ={6}>
                  <br/>
                <h4>Write a review</h4>
                <ListGroup variant='flush'>
                <ListGroup.Item>
                            

                            {loadingProductReview && <Loader />}
                            {successProductReview && <Message variant='success'>Review Submitted</Message>}
                            {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}

                            {userInfo ? (
                                <Form onSubmit={submitHandler}>
                                    <Form.Group controlId='rating'>
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control
                                            as='select'
                                            value={rating}
                                            onChange={(e) => setRating(e.target.value)}
                                        >
                                            <option value=''>Select...</option>
                                            <option value='1'>1 - Poor</option>
                                            <option value='2'>2 - Fair</option>
                                            <option value='3'>3 - Good</option>
                                            <option value='4'>4 - Very Good</option>
                                            <option value='5'>5 - Excellent</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <br/>
                                    <Form.Group controlId='comment'>
                                        <Form.Label>Review</Form.Label>
                                        <Form.Control
                                            as='textarea'
                                            row='5'
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                        ></Form.Control>
                                    </Form.Group>
                                    <br/>
                                    <Button
                                        disabled={loadingProductReview}
                                        type='submit'
                                        variant='primary'
                                    >
                                        Submit
                                    </Button>

                                </Form>
                            ) : (
                                    <Message variant='info'>Please <Link to='/login'>login</Link> to write a review</Message>
                                )}
                        </ListGroup.Item>

                </ListGroup>
                  
                </Col>
                <Col md={6}>
                  <br/>
                    <h4>Reviews</h4>
                    {product.reviews.length === 0 && <Message variant='info'>No Reviews</Message>}

                    <ListGroup variant='flush'>
                        {product.reviews.map((review) => (
                            <ListGroup.Item key={review._id}>
                                <strong>{review.name}</strong>
                                <Rating value={review.rating} color='#f8e825' />
                                <p>{review.createdAt.substring(0, 10)}</p>
                                <p>{review.comment}</p>
                            </ListGroup.Item>
                        ))}

                        
                    </ListGroup>
                </Col>
              </Row>
            </div>
          )
        }

         
         
          
       
    </div>
  )
}

export default DescriptionPage