import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "./img/shoeCraftNav.png"
import {NavLink, useNavigate} from "react-router-dom";

import "./css/navbar.css"
import { useAuthContext } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { useProductContext } from '../context/ProductContext';

export const Navbar=()=>{
    const {isLogin,logoutUser}=useAuthContext();
    const {productDispatch}=useProductContext();
    const navigate=useNavigate();
    const[searchQuery,setSearchQuery]=useState("")
    const logoutClickHandler=()=>{

        if(isLogin){
            logoutUser();
        }
    }
    const searchHandler=(e)=>{
        setSearchQuery(e.target.value);

        navigate("/products");
    }
    useEffect(()=>{
        productDispatch({type:"setSearhFilter",payload:searchQuery})
    },[searchQuery])

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
                <input type="text" placeholder='search products' onChange={(e)=>searchHandler(e)} />
            </div>
            <div className="navigation">
            <NavLink to="/products"><FontAwesomeIcon icon="fa-solid fa-store" /></NavLink>
            <NavLink to="/cart"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></NavLink>
            <NavLink to="/wishlist"><FontAwesomeIcon icon="fa-solid fa-heart" /></NavLink>
            <NavLink to="/login"><button onClick={logoutClickHandler} className='loginBtn'>{!isLogin?"Login":"Logout"}</button></NavLink>
            </div>
        </div>
    )
}