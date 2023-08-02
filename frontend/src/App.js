import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import DescriptionPage from './pages/DescriptionPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import ShippingPage from './pages/ShippingPage'
import PaymentPage from './pages/PaymentPage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import OrderPage from './pages/OrderPage'
import UserListPage from './pages/UserListPage'
import UserEditScreen from './pages/UserEditPage'
import ProductListPage from './pages/ProductListPage'
import ProductEditPage from './pages/ProductEditPage'
import OrderListPage from './pages/OrderListPage'

function App() {
  return (
    <Router >
      <Header />
      
      <Navigation />

      
        <main className='py-3'>
          <Container>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/shipping' element={<ShippingPage />} />
            <Route path='/placeorder' element={<PlaceOrderPage />} />
            <Route path='/order/:id' element={<OrderPage />} />
            <Route path='/payment' element={<PaymentPage />} />
            <Route path='/store' element={<ProductPage />} />
            <Route path='/product/:id' element={<DescriptionPage />} />
            <Route path='/cart/:id?' element={<CartPage />} />

            <Route path='/admin/userlist' element={<UserListPage />} />
            <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />

            <Route path='/admin/productList' element={<ProductListPage />} />
            <Route path='/admin/product/:id/edit' element={<ProductEditPage />} />

            <Route path='/admin/orderlist' element={<OrderListPage />} />

            
          </Routes>
          </Container>
          
        </main>
      
      


      <Footer />
     
    </Router>
  );
}

export default App;
