import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message  from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

function CartPage() {

    const { id } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart


    const searchParams = new URLSearchParams(location.search)
    const qty = searchParams.get('qty') ? Number(searchParams.get('qty')) : 1

    

    useEffect(() =>{
        if (id){
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

    const removeFromCartHandler = (id) =>{
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () =>{
        navigate('/login?redirect=/shipping')
    }
    
    
    return (
        <Row>
            <Col md ={8}>
                <h1 className='display-5'> Shopping Cart</h1>
               
                {cartItems.length === 0 ? (
                    <Message variant = 'info'>
                        Your cart is empty <Link to = '/'> Go Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant = 'flush'>
                        {cartItems.map( item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md = {2}>
                                        <Image src ={item.image} alt ={item.name} fluid rounded />
                                    </Col>

                                    <Col md = {3}>
                                        <Link to ={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>

                                    <Col md = {2}>
                                        $ {item.price}
                                    </Col>

                                    <Col md = {3}>
                                        <Form.Select 
                                            size ='sm'
                                            value = {item.qty}
                                            onChange = {(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                            >
                                            {
                                                [...Array(item.countInStock).keys()].map((x) =>(
                                                    <option key = { x + 1} value ={x + 1}>
                                                    {x + 1}
                                                    </option>
                                                ))
                                            }
                                        </Form.Select>
                                    </Col>

                                    <Col md = {1}>
                                        <Button
                                        type = 'button'
                                        variant = 'dark'
                                        onClick = {() => removeFromCartHandler(item.product)}
                                        >
                                            <i className = 'fas fa-trash'></i>
                                        </Button>
                                    
                                    </Col>
                                </Row>

                            </ListGroup.Item>
                        ))}

                    </ListGroup>
                )}
                 <Link to='/store' className='btn btn-dark my-3' style={{ fontSize: '1.rem', fontWeight: 300 }}>  Continue Shopping  &#128722; </Link>
            </Col>

            <Col md = {4}>
                <Card>
                    <ListGroup variant = 'flush'>
                        <ListGroup.Item>
                            <h3 className='display-6'>Subtotal - {cartItems.reduce((acc, item) => acc + item.qty, 0)} items</h3>
                            $ {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup.Item style={{ marginBottom: '10px', marginTop: '10px' }}>
                        
                        <Button
                            type='button' 
                            style={{ 
                                padding: '10px 1',
                                margin: '0 auto',
                                display: 'block', 
                                textAlign: 'center' }}
                            disabled = {cartItems.length === 0 }
                            onClick = {checkoutHandler}
                           
                        >
                            Proceed To Checkout
                        </Button>
                       
                    </ListGroup.Item>


                </Card>
            </Col>
        </Row>
    )
}

export default CartPage