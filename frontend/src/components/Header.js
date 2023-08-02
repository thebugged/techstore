import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import ConfirmationModal from './ConfirmationModal'


function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  const [showConfirmation, setShowConfirmation] = useState(false);

  const logoutHandler = () => {
    setShowConfirmation(true);
  };

  const handleLogoutConfirm = () => {
    dispatch(logout());
    setShowConfirmation(false);
  };

  const handleLogoutCancel = () => {
    setShowConfirmation(false);
  };

  const handleNavbarBrandClick = () => {
    if (window.location.pathname !== '/') {
      navigate ('/')
    }else {
      window.location.reload()
    }
  }

  const isHomePage = location.pathname === '/';

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className="navbar-wrapper">
        <Container >

          <Navbar.Brand as={Link} to="/" onClick={handleNavbarBrandClick}>
            Cybera
          </Navbar.Brand>
         
          <SearchBox />
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
          <Navbar.Collapse id="basic-navbar-nav" >
          
            <Nav className="ms-auto">

              

              {userInfo ? (
                <NavDropdown title={<span> Account  </span>} id="username" >
                    <NavDropdown.Item as={NavLink} to="/profile">
                      Profile
                    </NavDropdown.Item>

                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>

                    {userInfo.isAdmin && (
                      <>
                        
                        <NavDropdown.Divider />
                        
                        <NavDropdown.Item as={NavLink} to="/admin/userlist">
                          Users
                        </NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/admin/productlist">
                          Products
                        </NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/admin/orderlist">
                          Orders
                        </NavDropdown.Item>
                        
                      </>
                      
                  )}
                  
                </NavDropdown>
                
              ) : (

                <Nav.Link as={NavLink} to="/login">
                  <i className="fas fa-user"></i> Login
                </Nav.Link>
              )}
            

            </Nav>
            
            
          </Navbar.Collapse>
          
          <Nav.Link as={NavLink} to="/cart">
          
                <i className="fas fa-shopping-cart">
                  <span id="cart-total">{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
                </i> 
              {/* <p id="cart-total">{cartItems.length}</p> */}
              </Nav.Link>
        </Container>
      </Navbar>

      <Container>
        <br/>
        {isHomePage && (userInfo && userInfo.isAdmin 
          ? <p style={{ fontSize: '0.9rem', color: 'white' }}>
            Welcome, Admin
            </p> 
            : userInfo && <p style={{ fontSize: '0.9rem', color: 'white' }}>
              Welcome, {userInfo.name}
            </p>)}

      </Container>
      <ConfirmationModal
        show={showConfirmation}
        onClose={handleLogoutCancel}
        onConfirm={handleLogoutConfirm}
      />
    </header>
  )
}

export default Header
