import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { ProductReducer } from "../reducers/ProductReducer";
import { getProducts } from "../apiCalls/products";
import { usePagination } from "../hooks/pagination";

export const ProductContext=createContext();

export const ProductsProvider=({children})=>{
    const [productState,dispatch]=useReducer(ProductReducer,{
        products:[],
        currentPage:[]
    })

    const[loading,setLoading]=useState(true);

    
    const getProductsData=async()=>{
        const json=await getProducts();
        if(json.success){
            dispatch({type:'setProducts',payload:json.products});
            setLoading(false)
        }
        else{
            console.log(json);
            setLoading(false)
        }

    }
    const setCurrentPage=(startIndex,endIndex)=>{
        dispatch({type:'setCurrentPage',payload:{startIndex,endIndex}})
    }

    useEffect(()=>{
        getProductsData();
       
    },[])

    return(
        <ProductContext.Provider value={{productState,setCurrentPage}}>
            {children}
        </ProductContext.Provider>
    )

}

export const useProductContext=()=>useContext(ProductContext);