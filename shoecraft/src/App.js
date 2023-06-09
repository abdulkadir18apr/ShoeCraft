import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Routes,Route, BrowserRouter } from 'react-router-dom';

import {Home} from "./pages/Home"
import { Products } from './pages/Products';
import { Login } from './pages/Login';
import { RequiresAuth } from './components/RequiresAuth';
import { Wishlist } from './pages/Wishlist';
import { Cart } from './pages/Cart';
import { ToastContainer } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
import "../src/pages/css/toastify-custom.css";
import { ProductDetails } from './pages/ProductDetails';
import { Loader } from './components/Loader';
import { User } from './pages/User';
import { UserProfile } from './components/UserProfile';
import { UserAddress } from './components/UserAddress';

import { Checkout } from './pages/Checkout';




function App() {
  return (
    <div className="App">

      
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/login" element={<Login isLogin={true}/>}/>
        <Route path="/signup" element={<Login isLogin={false}/>}/>
        <Route path="/wishlist" element={
        <RequiresAuth>
            <Wishlist/>
        </RequiresAuth>
        
        }/>
        <Route path="/cart" element={
        <RequiresAuth>
            <Cart/>
        </RequiresAuth>
        
        }/>
        <Route path="/user" element={
        <RequiresAuth>
            <User/>
        </RequiresAuth>
        
        }>
          <Route path=''  element={<UserProfile/>} />
          <Route path='address' element={<UserAddress/>}/>
        </Route>

        <Route path="/checkout" element={<Checkout/>} />
       
      </Routes>
      <ToastContainer position="bottom-right" autoClose={2000}  newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>

    </div>
  );
}

export default App;
