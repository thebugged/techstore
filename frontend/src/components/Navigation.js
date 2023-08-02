import React from 'react'

import { Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Navigation() {


  return (
        <div>
        <Container>
            <Nav className='justify-content-center'>
            <Nav.Link as={NavLink} to="/"  style={{ color: 'grey' }} title="Home">
                <i className="fas fa-home"></i> 
            </Nav.Link>

            <Nav.Link as={NavLink} to="/store"  style={{ color: 'grey' }} title ="See Tech">
                <i className="fas fa-shop"></i> 
            </Nav.Link>
            </Nav>  
        </Container>
         
        </div>
        
    
  )
}

export default Navigation
