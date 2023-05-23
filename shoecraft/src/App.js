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



function App() {
  return (
    <div className="App">

      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
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
      </Routes>

    </div>
  );
}

export default App;
