import React from 'react'
import { Card } from 'react-bootstrap'

import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
            <Card.Img 
            variant='top' 
            src={product.image} 
            fluid = 'true' 
            rounded = 'true' 
            className='product-image'
            alt={product.name}
            />
        </Link>

        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as='div'>
                    <strong>
                        {product.name}
                    </strong>
                    
                </Card.Title>
            </Link>
            {/* <h5>by {product.author}</h5> */}

            <Card.Text as='div'>
                <div className='my-3'>
                   
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                </div>

            </Card.Text>

            <Card.Text as ='h5'>
                $ {product.price}

            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product