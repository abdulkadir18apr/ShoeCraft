import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { ProductReducer } from "../reducers/ProductReducer";
import { getProducts } from "../apiCalls/products";
import { usePagination } from "../hooks/pagination";
import { applyFilters } from "./filters";

export const ProductContext=createContext();

export const ProductsProvider=({children})=>{
    const [productState,productDispatch]=useReducer(ProductReducer,{
        products:[],
        currentPage:[],
        loading:true,
        filters:{category:[],price:250,footwearType:[],rating:-1,sort:-1,searchQuery:""}
    })


    const filteredProducts=applyFilters(productState.products,productState.filters);

    const getProductsData=async()=>{
        const json=await getProducts();
        if(json.success){
            productDispatch({type:'setProducts',payload:json.products});
        }
        else{
            console.log(json);
        }

    }
    const setCurrentPage=(startIndex,endIndex)=>{
        productDispatch({type:'setCurrentPage',payload:{startIndex,endIndex,filteredProducts}})
    }

    useEffect(()=>{
        getProductsData();
    },[])

    return(
        <ProductContext.Provider value={{productState,setCurrentPage,productDispatch,filteredProducts}}>
            {children}
        </ProductContext.Provider>
    )

}


export const useProductContext=()=>useContext(ProductContext);