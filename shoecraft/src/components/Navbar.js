import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "./img/shoeCraftNav.png"
import {NavLink} from "react-router-dom";

import "./css/navbar.css"

export const Navbar=()=>{
    return(
        <div className="Navbar">
            <NavLink to="/">
            <div className="logo">
                <img src={logo} alt="logo" />
                <p className='logo-text'>ShoeCraft</p>
            </div>
                
            </NavLink>

            <div className="searchBar">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='searchIcon' />
                <input type="text" placeholder='search products' />

            </div>
            <div className="navigation">
            <NavLink to="/products"><FontAwesomeIcon icon="fa-solid fa-store" /></NavLink>
            <NavLink><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></NavLink>
            <NavLink><FontAwesomeIcon icon="fa-solid fa-heart" /></NavLink>
         
            <NavLink><button className='loginBtn'>Login</button></NavLink>
            </div>
        </div>
    )
}