import React, { useState } from 'react'

import "./css/productCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuthContext } from '../context/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { addToCart, addToWishlist, deleteFromWishlist } from '../apiCalls/products';
import { useWishlistContext } from '../context/WishlistContext';
import { useCartContext } from '../context/CartContext';
import { toast } from 'react-toastify';

export  function ProductCard({productId,productName,productCategory,productGender,productImage,productBrand,productPrice,productRating}) {
  const product={_id:productId,name:productName,category:productCategory,brand:productBrand,price:productPrice,rating:productRating,imageURL:productImage,gender:productGender}
  const ratingStar=['','','','',''];
  const {wishlist}=useWishlistContext();
  const {addItemToCart}=useCartContext();
  const [isFavorite,setFavorite]=useState(wishlist.some((item)=>item._id===productId));

  ratingStar.fill("-regular",productRating);
  const {isLogin}=useAuthContext();
  const {addProductTowishlist,deleteProductFromWishlist}=useWishlistContext();
  const navigate=useNavigate();


  const addToWishlistHandler=async()=>{
    if(!isLogin){
      navigate("../login");
    }
    else{
      if(!isFavorite){
        //add item to favorite
        const res=await addToWishlist(productId);
        if(res.success){
          toast("Item Added to wishlist");
          setFavorite(!isFavorite);
          addProductTowishlist(product)
        }
        else{
          toast("something went wrong Try Login Again");
        }
       
      }
      else{
          //remove from favorite
          const res=await deleteFromWishlist(productId);
          if(res.success){
            setFavorite(!isFavorite);
            deleteProductFromWishlist(product)
            toast("Item Removed from Wishlist");
          }
          else{
            toast("Something went wrong");
          }
          
        }
       
    }

  }
  const addToCartClickHandler=async(e)=>{
    if(!isLogin){
      navigate("../login");
    }
    const res=await addToCart(e.target.value);
    if(res.success){
      addItemToCart(product);
      toast("Item Added to Cart");

    }
    else{
      toast("Try login Again");
    }
  }







  return (
    <div className='productCard'> 
        <div className="patch">
    <p className='productCategory'>{productCategory}</p>
    <p className='productGender'>{productGender}</p>
    </div>
    <div className="productImage">
        <NavLink style={{textDecoration:"none"}}  to={`${productId}`}><img src={productImage} alt="Product" /></NavLink>
    </div>

    <div className="productDetails">
    <NavLink style={{textDecoration:"none"}} className="inactive"  to={`${productId}`}><p>{productName}</p></NavLink>
    <p>{productBrand}</p>
    <p className='price'>${productPrice}</p>
    </div>
    <div className="productrating">
        <FontAwesomeIcon icon={`fa${ratingStar[0]} fa-star`}/>
        <FontAwesomeIcon icon={`fa${ratingStar[1]} fa-star`}/>
        <FontAwesomeIcon icon={`fa${ratingStar[2]} fa-star`}/>
        <FontAwesomeIcon icon={`fa${ratingStar[3]} fa-star`}/>
        <FontAwesomeIcon icon={`fa${ratingStar[4]} fa-star`} />
    </div>
    <div className="cardBtn">
    <button className='addToCartBtn' value={productId} onClick={(e)=>addToCartClickHandler(e)}>Add to Cart</button>
    <FontAwesomeIcon icon={`fa-${isFavorite?"solid":"regular"} fa-heart`} style={{color: "#d8134e",}} className='heartIcon' onClick={(e)=>addToWishlistHandler(e)} />
    </div>
   
    </div>
  )
}
