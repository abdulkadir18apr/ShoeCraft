import React, { useState } from 'react'

import "./css/filters.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useProductContext } from '../context/ProductContext'

export  function FilterSection() {
    const [activeFilter,setActiveFilter]=useState(true)
    const{productDispatch}=useProductContext();
    const [menBtn,setMenBtn]=useState(false);
    const [womenBtn,setWomenBtn]=useState(false);
    const [kidsBtn,setKidsBtn]=useState(false);
    const [priceInput,setPriceInput]=useState(250);
    const [footwearType,setFootwearType]=useState({RUNNING:false,FORMAL:false,CASUAL:false})
    const [rating,setRating]=useState(null);
    const [sorting,setSorting]=useState(null);

    const categoryFilterClickHandler=(e)=>{
        if(e.target.value==="MEN"){
            if(!menBtn){
                setMenBtn(true);
                productDispatch({type:'addCategoryFilter',payload:"MEN"})
            }
            else{
                setMenBtn(false);
                productDispatch({type:'removeCategoryFilter',payload:"MEN"})
            }
        }
        else if(e.target.value==='WOMEN'){
            if(!womenBtn){
                setWomenBtn(true);
                productDispatch({type:'addCategoryFilter',payload:"WOMEN"})
            }
            else{
                setWomenBtn(false);
                productDispatch({type:'removeCategoryFilter',payload:"WOMEN"})
            }

        }
        else{
            if(!kidsBtn){
                setKidsBtn(true);
                productDispatch({type:'addCategoryFilter',payload:"KIDS"})
            }
            else{
                setKidsBtn(false);
                productDispatch({type:'removeCategoryFilter',payload:"KIDS"})
            }

        }
       

    }
    const priceFilterHandler=(e)=>{
        setPriceInput(e.target.value);
        productDispatch({type:'setPriceFilter',payload:e.target.value});
    }
    const footwearTypeFilterHandler=(e)=>{
        setFootwearType((prev)=>({...prev,[e.target.name]:e.target.checked}))
        if(e.target.checked){
            productDispatch({type:'addFootwearTypeFilter',payload:e.target.value})
        }
        else{
            productDispatch({type:'removeFootwearTypeFilter',payload:e.target.value})

        }
    }

    const ratingFilterHandler=(e)=>{
        setRating(e.target.value)
         productDispatch({type:"setRatingFilter",payload:Number(e.target.value)});

    }
    const sortingFilterHandler=(e)=>{
        setSorting(e.target.value);
        productDispatch({type:"setSortingFilter",payload:Number(e.target.value)});
    }
    const clearFilterHandler=()=>{
        productDispatch({type:"clearFilters",payload:""});
        setMenBtn(false);
        setWomenBtn(false);
        setKidsBtn(false);
        setPriceInput(250);
        setFootwearType({RUNNING:false,FORMAL:false,CASUAL:false});
        setRating(null);
        setSorting(null)



    }
  
  return (
    <div className='filterContainer'>
    <div className='filterDiv'>
    <FontAwesomeIcon icon={"fa fa-filter"} size="2xl" onClick={()=>setActiveFilter((prev)=>!prev)} className='filterIcon'/>

    </div>
   
    <div className={`filters ${activeFilter?"activefilters":""}`}>
        <div className="filter_header">
            <h3>Filters</h3>
            <button onClick={clearFilterHandler}>Clear</button>
        
        </div>
        <div className='category'>
            <h3>Category</h3>
            <div className="filterBtn">

            <button value="MEN" onClick={(e)=>categoryFilterClickHandler(e)} style={{backgroundColor:menBtn ? "olive":""}}>Men</button>
            <button value="WOMEN" onClick={(e)=>categoryFilterClickHandler(e)} style={{backgroundColor:womenBtn ? "olive":""}}>Women</button>
            <button value="KIDS" onClick={(e)=>categoryFilterClickHandler(e)} style={{backgroundColor:kidsBtn ? "olive":""}}>Kids</button>

            </div>
        
        </div>
        <div className='price'>
            <h3>Price</h3>
            <div className="priceBtn">
                <input type="range" name="price" id="price" min="0" max="250" value={priceInput} onChange={priceFilterHandler}/>
                <p>Price-range:$0-${priceInput}</p>
            </div>
        </div>
        <div className='type'>
            <h3>Footwear Type</h3>
            <div className="typeBtn">
                <label htmlFor=""> 
                
                <input type="checkbox" name="RUNNING" checked={footwearType.RUNNING}  value="RUNNING" id="" onChange={(e)=>footwearTypeFilterHandler(e)} />
                RUNNING
                </label>
                <label htmlFor=""> 
                <input type="checkbox" name="FORMAL" value="FORMAL"  checked={footwearType.FORMAL} id=""  onChange={(e)=>footwearTypeFilterHandler(e)} />{"   "}FORMAL
                </label>
                <label htmlFor=""> 
                <input type="checkbox" name="CASUAL" value="CASUAL" id="" checked={footwearType.CASUAL}  onChange={(e)=>footwearTypeFilterHandler(e)} />{"   "}CASUAL
                </label>   
            </div>

        <div className='rating'>
            <h3>Rating</h3>
            <div className="typeBtn">
                <label htmlFor=""> 
                
                <input type="radio" name="footwearType" id="" value="3" checked={rating==="3"} onChange={(e)=>ratingFilterHandler(e)} />3 Star & above
                </label>
                <label htmlFor=""> 
                
                <input type="radio" name="footwearType" id="" value="4" checked={rating==="4"}  onChange={(e)=>ratingFilterHandler(e)} />4 Star & above
                </label>
                <label htmlFor=""> 
                
                <input type="radio" name="footwearType" id="" value="5" checked={rating==="5"}  onChange={(e)=>ratingFilterHandler(e)} />5 Star & above
                </label>   
            </div>
        </div>

        <div className='sort'>
            <h3>Sort By Price</h3>

        <div className='typeBtn'>
            <label htmlFor="">
                <input type="radio" name="sortInput" id="" value="0" checked={sorting==="0"} onChange={sortingFilterHandler} />price-Low-to-High
            </label>
            <label htmlFor="">
                <input type="radio" name="sortInput" id="" value={"1"} checked={sorting==="1"} onChange={sortingFilterHandler} />price-High-to-Low
            </label>
        </div>
        </div>
       
        

    

        
      
    </div>
    </div>
</div>
  )
}
