import React, { useState } from 'react'

import "./css/filters.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export  function FilterSection() {
    const [activeFilter,setActiveFilter]=useState(true)
  return (
    <div className='filterContainer'>
    <div className='filterDiv'>
    <FontAwesomeIcon icon={"fa fa-filter"} size="2xl" onClick={()=>setActiveFilter((prev)=>!prev)} className='filterIcon'/>

    </div>
   
    <div className={`filters ${activeFilter?"activefilters":""}`}>
        <div className="filter_header">
        
        </div>
        <div className='category'>
            <h3>Category</h3>
            <div className="filterBtn">

            <button>Men</button>
            <button>Women</button>
            <button>Kids</button>

            </div>
        
        </div>
        <div className='price'>
            <h3>Price</h3>
            <div className="priceBtn">
                <input type="range" name="price" id="price" min="0" max="10000" />
            </div>
        </div>
        <div className='type'>
            <h3>Footwear Type</h3>
            <div className="typeBtn">
                <label htmlFor=""> 
                
                <input type="checkbox" name="footwearType" id="" />
                RUNNING
                </label>
                <label htmlFor=""> 
                
                <input type="checkbox" name="footwearType" id="" />{"   "}FORMAL
                </label>
                <label htmlFor=""> 
                
                <input type="checkbox" name="footwearType" id="" />{"   "}  CASUAL
                </label>   
            </div>

        <div className='rating'>
            <h3>Rating</h3>
            <div className="typeBtn">
                <label htmlFor=""> 
                
                <input type="checkbox" name="footwearType" id="" />3 Star & above
                </label>
                <label htmlFor=""> 
                
                <input type="checkbox" name="footwearType" id="" />4 Star & above
                </label>
                <label htmlFor=""> 
                
                <input type="checkbox" name="footwearType" id="" />5 Star & above
                </label>   
            </div>
        </div>

        <div className='sort'>
            <h3>Sort By Price</h3>

        <div className='typeBtn'>
            <label htmlFor="">
                <input type="radio" name="sortInput" id="" />price-Low-to-High
            </label>
            <label htmlFor="">
                <input type="radio" name="sortInput" id="" />price-High-to-Low
            </label>
        </div>
        </div>
       
        

    

        
      
    </div>
    </div>
</div>
  )
}
