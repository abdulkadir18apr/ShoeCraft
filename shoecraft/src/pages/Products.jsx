import React, { useEffect } from 'react'


import { FilterSection } from '../components/FilterSection'
import Pagination from '@mui/material/Pagination';

import "./css/products.css"
import { ProductCard } from '../components/ProductCard'
import { useProductContext } from '../context/ProductContext';
import { usePagination } from '../hooks/pagination';
import { useAuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { Loader } from '../components/Loader';
import { Link } from 'react-router-dom';



export  function Products() {
    const {productState,setCurrentPage,filteredProducts}=useProductContext();
    const {isLogin}=useAuthContext();
    const [totalPages,startPageIndex,endPageIndex,currenPageIndex,displayPage]=usePagination(8,filteredProducts.length);


    const pageChangeHandler=(e,value)=>{
        displayPage(value);
    }

    useEffect(()=>{
        setCurrentPage(startPageIndex,endPageIndex);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[startPageIndex,endPageIndex]);

    useEffect(()=>{
        setCurrentPage(startPageIndex,endPageIndex);
        displayPage(1)
       //eslint-disable-next-line react-hooks/exhaustive-deps
    },[totalPages,JSON.stringify(filteredProducts)])

    useEffect(()=>{
        if(isLogin){
           
            toast(`Welcome  ${localStorage.getItem('userName')} `);
        }
          //eslint-disable-next-line react-hooks/exhaustive-deps
    },[isLogin])
  


  return (
    <div className="products-container">
        <div className="products">
            <div className="filterNav">
                <FilterSection/>

            </div>
            <div className="productList">
            {  productState.loading && <Loader/>}
                {

                   !productState.loading &&  productState.currentPage.map((item)=>(
              <ProductCard key={item?._id} productId={item?._id} productName={item?.name} productBrand={item?.brand} productCategory={item?.category} productGender={item?.gender} productImage={item?.imageURL} productPrice={item?.price} productRating={item?.rating}/>
                    ))

                }
             
              
            </div>
           

        </div>

        <div className='pagination'>
        <Pagination count={totalPages} color='secondary' onChange={(e,value)=>pageChangeHandler(e,value)}/>

        </div>
       
    </div>
  )
}
