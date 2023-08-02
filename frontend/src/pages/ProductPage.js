import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { useSearchParams, useLocation } from 'react-router-dom'

import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'



function ProductPage() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products, page, pages} =  productList

  // const [searchParams] = useSearchParams()
  // let keyword = searchParams.get('keyword')



  const location  = useLocation()
  let keyword = location.search


  useEffect(() => {
    dispatch(listProducts(keyword))
   
  }, [dispatch, keyword])

  

  return (
    <div>
        <h1 className='display-5'> Tech</h1>
        <Link to='/' className='btn btn-dark my-3' style={{ fontSize: '1.rem', fontWeight: 300 }}> &#8592; Home</Link>
        {loading ? <Loader/>
            : error ? <Message variant = 'danger'>{error}</Message>
            : 
            <div>
              <Row>
                  {products.map(product =>(
                      <Col key ={product._id} sm={12} md={6} lg={4} xl={3}>
                          <Product product={product} />
                      </Col>
                  ))}
              </Row>
              <Paginate page={page} pages={pages} keyword={keyword} />
            </div>
        }
      
        
    </div>
  )
}

export default ProductPage