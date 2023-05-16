import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import {Home} from "./pages/Home"
import { Products } from './pages/Products';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
