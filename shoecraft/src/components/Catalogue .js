import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


import men from "./img/shoes/mens-removebg-preview.png"
import lady from "./img/shoes/ladies-removebg-preview.png"
import kid from "./img/shoes/kids-removebg-preview.png"
import slipper from "./img/shoes/slipper-removebg-preview (1) (1).png";
import sandle from "./img/shoes/sandle-removebg-preview (1).png"
import shoes from "./img/shoes/shoess-removebg-preview (1).png"
import casual from "./img/shoes/casual-removebg-preview (1).png";
import formal from "./img/shoes/formal-removebg-preview (1).png";
import running from "./img/shoes/running-removebg-preview.png"
import rightArrow from "./img/rightArrow.png"

import "./css/catalogue.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useProductContext } from '../context/ProductContext'


export  function Catalogue () {


    const [active,setActive]=useState(1);
    const {productDispatch,productState}=useProductContext();
    const HandleForwardClick=()=>{
        active===2?setActive(1):setActive((prev)=>prev+1)
    }
    const HandleBackwardClick=()=>{
        active===1?setActive(1):setActive((prev)=>prev-1)
    }
  return(
    <div className="catalogue">
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" size="2xl" className='arrowIcons left' onClick={HandleBackwardClick}/>
        <div className={`screen ${active===1 && "active"}`} >
      
        <NavLink to="/products" onClick={()=>productDispatch({type:"addCategoryFilter",payload:"MEN"})}>
        <div className='collection'>
        <img src={men}  alt="shoe"/>
        <p>Men's Collection</p>
        </div>
        </NavLink>
        <NavLink to="/products" onClick={()=>productDispatch({type:"addCategoryFilter",payload:"WOMEN"})}>
        <div className='collection'>
        <img src={lady}  alt="shoe"/>
        <p>Ladies Collection</p>
        </div>
        </NavLink>
        <NavLink to="/products" onClick={()=>productDispatch({type:"addCategoryFilter",payload:"KIDS"})}>
        <div className='collection'>
        <img src={kid}  alt="shoe"/>
        <p>Kid's Collection</p>
        </div>
        </NavLink>
        </div>
      
       
        <div className={`screen ${active===2 && "active"}`}>

        <NavLink to="/products" onClick={()=>productDispatch({type:"addFootwearTypeFilter",payload:"CASUAL"})}>
        <div className='collection'>
        <img src={casual}  alt="shoe"/>
        <p>Casuals</p>
        </div>
        </NavLink>

        <NavLink to="/products" onClick={()=>productDispatch({type:"addFootwearTypeFilter",payload:"FORMAL"})}>
        <div className='collection'>
        <img src={formal}  alt="shoe"/>
        <p>Formals</p>
        </div>
        </NavLink>

        <NavLink to="/products" onClick={()=>productDispatch({type:"addFootwearTypeFilter",payload:"RUNNING"})}>
        <div className='collection'>
        <img src={running}  alt="shoe"/>
        <p>Running</p>
        </div>
        </NavLink>
        </div>


        <FontAwesomeIcon icon="fa-solid fa-arrow-right" size="2xl"  className='arrowIcons right' onClick={HandleForwardClick} />

      
    </div>
  )
}
