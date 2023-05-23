import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'


import  "./css/cartItem.css"
import { deletetFromCart, updateCart } from '../apiCalls/products'
import { useCartContext } from '../context/CartContext';



export  function CartItem({cartProduct}) {
    const {removeItemFromCart,updateItemQuantity}=useCartContext();


    const removeFromCartHandler= async(e)=>{
        const res=await deletetFromCart(cartProduct.product._id);
        if(res.success){
            removeItemFromCart(cartProduct.product._id);
        }

    }

    const quantitiyChangeHandler=async(e,action)=>{
        console.log(action);
        const res=await updateCart(cartProduct.product?._id,action);
        if(res.success){
            updateItemQuantity(cartProduct.product._id,action);
        }

    }
    
  return (
    <div className='cartItem'>
        <div className="item__img">
            <img src={cartProduct.product?.imageURL} alt="Product" />
          
           
        </div>
        <div className="item__details">
            <p>{cartProduct.product.name}</p>
            <div className="item__brand">
            <span>{cartProduct.product.brand}</span><span>{cartProduct.product.gender}</span><span>{cartProduct.product.category}</span>
           

            </div>

            <div className="item__size">
            <select name="size" id="">
                <option value="6">US-6</option>
                <option value="7">US-7</option>
                <option value="8">US-8</option>
                <option value="9">US-9</option>
                <option value="10">US-10</option>
            </select>
        </div>
 
        <div className="quantity">
            <FontAwesomeIcon icon="fa-solid fa-circle-minus" className='quantity__icon' onClick={(e,action)=>quantitiyChangeHandler(e,'decrement')} />
            <input type="number" name="quantuity" id="" value={cartProduct?.quantity} disabled/>
            <FontAwesomeIcon icon="fa-solid fa-circle-plus"  className='quantity__icon'  onClick={(e,action)=>quantitiyChangeHandler(e,'increment')} />
        </div>
        <p>Price: ${cartProduct.product.price}</p>
  
        <button className='addToCartBtn'  onClick={removeFromCartHandler}>Remove From Cart</button>
        </div>

       

      
    </div>
  )
}
