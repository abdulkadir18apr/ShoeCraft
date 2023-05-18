import React, { useEffect } from 'react'


import { FilterSection } from '../components/FilterSection'
import Pagination from '@mui/material/Pagination';

import "./css/products.css"
import { ProductCard } from '../components/ProductCard'
import { Footer } from '../components/Footer'
import { useProductContext } from '../context/ProductContext';
import { usePagination } from '../hooks/pagination';



export  function Products() {
    const {productState,setCurrentPage,loading}=useProductContext();
      const [totalPages,startPageIndex,endPageIndex,currenPageIndex,displayPage]=usePagination(8,productState.products.length);


    const pageChangeHandler=(e,value)=>{
        displayPage(value);
    }
    
    useEffect(()=>{
        setCurrentPage(startPageIndex,endPageIndex)
    },[startPageIndex,endPageIndex]);
  


  return (
    <div className="products-container">
        <div className="products">
            <div className="filterNav">
                <FilterSection/>

            </div>
            <div className="productList">
          {  loading && <p>Loading.....</p>}
                {
               
                   !loading &&  productState.currentPage.map(({name,brand,category,gender,imageURL,price,rating})=>(
                        <ProductCard productName={name} productBrand={brand} productCategory={category} productGender={gender} productImage={imageURL} productPrice={price} productRating={rating}/>
                    ))

                }
             
              
            </div>
           

        </div>
        {/* <Footer/> */}
        <div className='pagination'>
        <Pagination count={totalPages}  onChange={(e,value)=>pageChangeHandler(e,value)}/>

        </div>
       
    </div>
  )
}
