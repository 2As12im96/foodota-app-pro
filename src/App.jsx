import { ToastContainer } from 'react-toastify';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './components/Home/Home';
import Register from './components/Authentication/Register/Register';
import Blogs from './components/Blogs/Blogs';
import BlogsSpot from './components/Blogs/BlogsSpot';
import Login from './components/Authentication/Login/Login';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import NewProduct from './components/Admin/CreateProduct/NewProduct';
import Meals from './components/Meals/Meals';
import CheckoutSuccess from './components/CheckoutSuccess/CheckoutSuccess';
import Orders from './components/Admin/Orders/Orders';
import OrderDetails from './components/Admin/Orders/OrderDetails';
import Users from './components/Admin/Users/Users';
import UserDetails from './components/Admin/Users/UserDetails';
import Products from './components/Admin/Products/Products';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/meals' element={<Meals/>}/>
          <Route path='/checkout-success' element={<CheckoutSuccess />}/>
          <Route path='/blogs/:id' element={<BlogsSpot />} />
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/admin-products' element={<Products />}/>
          <Route path='/admin-create-product' element={<NewProduct />} />
          <Route path="/admin-orders" element={<Orders/>} />
          <Route path="/admin-order-details/:id" element={<OrderDetails/>} />
          <Route path="/admin-users" element={<Users/>} />
          <Route path="/admin-user/:id" element={<UserDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
