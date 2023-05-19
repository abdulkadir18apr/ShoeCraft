import React, { useEffect } from 'react'


import { FilterSection } from '../components/FilterSection'
import Pagination from '@mui/material/Pagination';

import "./css/products.css"
import { ProductCard } from '../components/ProductCard'
import { Footer } from '../components/Footer'
import { useProductContext } from '../context/ProductContext';
import { usePagination } from '../hooks/pagination';



export  function Products() {
    const {productState,setCurrentPage,filteredProducts}=useProductContext();
    const [totalPages,startPageIndex,endPageIndex,currenPageIndex,displayPage]=usePagination(8,filteredProducts.length);


    const pageChangeHandler=(e,value)=>{
        displayPage(value);
    }


    
    useEffect(()=>{
        setCurrentPage(startPageIndex,endPageIndex);
    },[startPageIndex,endPageIndex]);

    useEffect(()=>{
        setCurrentPage(startPageIndex,endPageIndex);
        displayPage(1)
    },[totalPages,JSON.stringify(filteredProducts)])
  


  return (
    <div className="products-container">
        <div className="products">
            <div className="filterNav">
                <FilterSection/>

            </div>
            <div className="productList">
            {  productState.loading && <p>Loading.....</p>}
                {

                   !productState.loading &&  productState.currentPage.map((item)=>(
                        <ProductCard productName={item?.name} productBrand={item?.brand} productCategory={item?.category} productGender={item?.gender} productImage={item?.imageURL} productPrice={item?.price} productRating={item?.rating}/>
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
